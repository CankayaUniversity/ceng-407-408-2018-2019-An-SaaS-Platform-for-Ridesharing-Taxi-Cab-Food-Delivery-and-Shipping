const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const app = express()


// define models
const User = require('./../models/user')
const Ride = require('./../models/ride')


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

// request a ride
router.post('/users/find_driver', auth, async (req, res) => {
    
    try {
        const ride = await Ride(req.body)
        if (ride) {
            console.log(req.body);
            ride.passenger = req.user._id
            await ride.save()
            res.status(201).send({ ride })
        }
        
    } catch (e) {
        console.log(e);
        
        res.status(500).send()
    }
})

// find a passenger
router.get('/users/find_passenger', auth, async (req, res) => {
    
    try {
        const radius = req.body
        console.log(req.body);
        const ride = await Ride()
        const listOfPassengers = await ride.allRides(radius)
        console.log(listOfPassengers);
        
        res.status(201).send(listOfPassengers)
        
    } catch (e) {
        console.log(e);
        
        res.status(500).send()
    }
})

module.exports = router