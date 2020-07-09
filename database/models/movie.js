const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  genre: {
    type: Array,
    required: true,
  },
<<<<<<< HEAD
=======
  location: {
    type: String,
    required: true
  },
>>>>>>> d32a7ed... api-playground
  movie_poster: {
    type: String,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
  runtime: {
    type: Number,
    required: true,
  },
  tagline: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  vote_average: {
    type: Number,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
