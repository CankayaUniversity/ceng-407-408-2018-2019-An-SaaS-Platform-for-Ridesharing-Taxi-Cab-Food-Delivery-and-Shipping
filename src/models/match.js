const mongoose = require('mongoose')
const validator = require( 'validator')
const jwt = require('jsonwebtoken')

// schema for the Matchmaking entity
const matchSchema = new mongoose.Schema({
    passenger: {
        type: String,
        required: true
    },
    driver: {
        type: String,
        required: true
    },
    matchScore: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    isBlacklisted: {
         type: Boolean,
         default: false 
    }
})

matchSchema.methods.makeBlacklist = function () {
    const match = this
    match.isBlacklisted = true
}

const Match = mongoose.model('Match', matchSchema)

module.exports = Match