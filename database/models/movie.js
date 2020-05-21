const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    genre: {
        type: String,
        required: true
    },
    release_date: {
        type: Number,
        required: false
    },
    runtime: {
        type: Number,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    vote_average: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Movie', movieSchema)