const jwt = require('jsonwebtoken')
const User = require('../models/user')

// get token from request, validate it
// check database if the given token exists for the given user
const auth = async (req,res,next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'riders-ots-user')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Authentication error' })
    }
}

module.exports = auth