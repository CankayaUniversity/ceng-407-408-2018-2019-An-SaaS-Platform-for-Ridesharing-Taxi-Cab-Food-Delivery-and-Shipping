const mongoose = require('mongoose')
const validator = require( 'validator')
const jwt = require('jsonwebtoken')

const User = require('./../models/user')

// schema for the Ride entity
const rideSchema = new mongoose.Schema({
    passenger: {
        type: String,
        required: true
    },
    driver: {
        type: String
    },
    origin: {
        lat: {
            type: Number,
            required: true
        },
        long: {
            type: Number,
            required: true
        }
    },
    destination: {
        lat: {
            type: Number,
            required: true
        },
        long: {
            type: Number,
            required: true
        }
    },
    date: {
         type: Date,
         default: Date.now 
    },
    ongoing: {
        type: Boolean,
        required: true,
        default: false
    },
    finished: {
        type: Boolean,
        required: true,
        default: false
    }
})



const Ride = mongoose.model('Ride', rideSchema)

module.exports = Ride