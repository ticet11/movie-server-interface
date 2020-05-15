const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')

// Getting all
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

// Creating One
router.post('/', async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        // releaseDate: req.body.releaseDate    
    })

    try {
        const newMovie = await movie.save()
        res.status(201).json(newMovie)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', (req, res) => {

})

// Deleting One
router.delete('/:id', (req, res) => {

})

module.exports = router