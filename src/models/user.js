const mongoose = require('mongoose')
const validator = require( 'validator')

const User = mongoose.model('User', {
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
        required: true,
        validate(value) {
            if(!validator.isMobilePhone(value)) {
                throw new Error('Phone is invalid.')
             }
        }
    },
    email: {
        type: String,
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
    }
})

module.exports = User