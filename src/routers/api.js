const express = require('express')
const router = new express.Router()
const app = express()


// define user model
const User = require('./../models/user')

router.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

router.get('/users/ride', (req,res) => {
    
    User.find({}).then((users) => {
        res.status(200).send(users)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

router.get('/users/:id', (req,res) => {
    
    User.findById(req.params.id).then((user) => {
        if (!user) {
            res.status(404).send();
        }
        res.status(200).send(user)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

module.exports = router