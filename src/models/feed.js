const mongoose = require('mongoose')
const validator = require( 'validator')
const jwt = require('jsonwebtoken')



// schema for the Feedback entity
const feedSchema = new mongoose.Schema({
    feedbackSource: {
        type: String,
        required: true
    },
    feedbackDest: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    date: {
         type: Date,
         default: Date.now 
    }
})

const Feed = mongoose.model('Feed', feedSchema)

module.exports = Feed