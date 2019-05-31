const mongoose = require('mongoose')
const validator = require( 'validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// schema for the User entity
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if(!validator.isMobilePhone(value)) {
                throw new Error('Phone is invalid.')
             }
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 10
    },
    city: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!(validator.equals(value, 'driver') || validator.equals(value, 'passenger'))) {
                throw new Error('User type is invalid')
            }
        }
    },
    userScore: {
        type: Number,
        default: 8
    },
    inQueue: {
        type: Boolean,
        default: false
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

// method for authenticating access using json web token
// jwt.sign(payload, signature)
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)
    // add created token to the database
    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

// sensitive data shouldn't be public, this method creates a public profile that hides sensitive info
userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    
    delete userObject.password
    delete userObject.tokens

    return userObject
}

// a method for finding user by email, and authenticating them via their hashed password
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

// method for hashing passwords, not storing passwords in plaintext
userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User