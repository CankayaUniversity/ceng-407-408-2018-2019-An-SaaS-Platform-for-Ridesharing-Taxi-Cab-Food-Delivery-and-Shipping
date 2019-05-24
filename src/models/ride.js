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

rideSchema.methods.allRides = async (radius) => {
    const rides = await Ride.find({ongoing: false, finished: false})
    // console.log('Rides: ')
    // console.log(rides)
    
    if (!rides) {
        throw new Error('Unable to login')
    }

    return rides
}

const Ride = mongoose.model('Ride', rideSchema)

module.exports = Ride