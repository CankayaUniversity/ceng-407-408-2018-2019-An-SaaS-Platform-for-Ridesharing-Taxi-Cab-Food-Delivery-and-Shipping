const express = require('express')
var queue = require('queue')
const router = new express.Router()
const auth = require('../middleware/auth')
const app = express()


// define models
const User = require('./../models/user')
const Ride = require('./../models/ride')
const Feed = require('./../models/feed')
const Match = require('./../models/match')

const passengerQueue = queue()
const driverQueue = queue()

// scheduled a task for matchmaking at regular intervals
var matchmakeSchedule = setInterval( async () => {
    try {
        if (passengerQueue.length  && driverQueue.length) {
            console.log('Matchmake attempt');
            const passenger = passengerQueue.pop()
            const driver = driverQueue.pop()
    
            // try to find if two users are matched before
            var match = await Match.findOne({ passenger: passenger.email, driver: driver.email})
            if (!match) {
                // find the average score of the match, and create a new match instance
                matchScore = (passenger.userScore + driver.userScore) / 2
                const newMatch = new Match({ passenger: passenger.email, driver: driver.email, matchScore})
                await newMatch.save()
                passenger.inQueue = false
                driver.inQueue = false
                passenger.save()
                driver.save()
            }
            else {
                // check if the match is blacklisted, if it is, push the users back to the end of the queue for low priority
                if (match.isBlacklisted) {
                    const passenger = passengerQueue.push()
                    const driver = driverQueue.push()
                }
                // if it's not blacklisted, simply activate the match again
                else {
                    match.active = true
                    passenger.inQueue = false
                    driver.inQueue = false
                    passenger.save()
                    driver.save()
                }
            }
    
    
        }
    } catch(e) {
        console.log(e)
    }
}, 1000);

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

// login route
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

// logout route
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

// logout all devices of a user
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

// get profile
router.get('/users/me', auth, async (req, res) => {
    try {
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

// update user info route
router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// delete user route
router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove()
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

// ride request for 
router.post('/users/find', auth, async (req, res) => {
    
    try {
        const radius = req.body
        const user = req.user
        if (!user.inQueue && user.userType == 'passenger') {
            passengerQueue.push(user)
            res.status(201).send()
            // user.inQueue = true
            user.save()
        }
        else if (!user.inQueue && user.userType == 'driver') {
            driverQueue.push(req.user)
            res.status(201).send()
            // user.inQueue = true
            user.save()
        } else {
            throw new Error('User type not recognized')
        }
        
    } catch (e) {
        console.log(e);
        
        res.status(500).send()
    }
})

// ride status
router.post('/users/ride', auth, async (req, res) => {
    
    try {
        const body = req.body
        const user = req.user
        // look for a match and a ride instance
        if (user.userType == 'passenger') {
            var match =  await Match.findOne({passenger: user.email, active: true})
        } else if (user.userType == 'driver') {
            var match =  await Match.findOne({driver: user.email, active: true})
        } else {
            throw new Error('User type not recognized.')
        }
        
        
        var ride = await Ride.findOne({matchmakeID: match._id, ongoing: true})
       
        if (match && !ride) {
            // if it doesn't exist, create it so that the other recipient doesn't have to
            ride = new Ride(
                {
                    matchmakeID: match._id,
                    origin: body.origin, 
                    destination: body.destination,
                    ongoing: true,
                    finished: false
                })
        }
        ride.save()
        res.status(201).send({ride})
        
    } catch (e) {
        
        res.status(500).send()
        throw new Error(e)
    }
})

// finished route
router.post('/users/ride_finish', auth, async (req, res) => {
    
    try {
        const body = req.body
        const user = req.user
        // look for a match and a ride instance
        if (user.userType == 'passenger') {
            var match =  await Match.findOne({passenger: user.email, active: true})
        } else {
            var match =  await Match.findOne({driver: user.email, active: true})
        }
        var ride = await Ride.findOne({matchmakeID: match._id, finished: false})
        // feedback the match score
        match.matchScore = (match.matchScore + body.feedback) / 2
        // if both parties finishes, the ride instance finishes, if not, the server waits for both of them to finish.
        if (body.feedback < 5) {
            // if low feedback, blacklist the match
            match.isBlacklisted = true
        } else {
            if (ride.ongoing) {
                ride.ongoing = false
                res.status(202).send() // see http status codes
            } else {
                ride.finished = true
                res.status(200).send()
            }
        }
        match.active = false
        ride.save()
        match.save()
        
    } catch (e) {
        res.status(500).send()
        throw new Error(e)
    }
})


module.exports = router