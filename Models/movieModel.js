// Defining a schema - 
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {  // Making an object literal - 
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true,

    },
    duration: {
        type : Number,
    },
    ratings: {
        type: Number,
        default: 1.0,
        required: true,
    },
    totalRating: {
        type: Number,
        required: true
    },

    releaseDate: {
        type: Date,
        default: Date.now()
    },
    releaseYear: {
        type: String,
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    directors: {
        type: [String],
        required: true
    },
    coverImage: {
        type: [String],
        required: true
    },
    actors: {
        type: [String],
        required: true
    },
    price: {
        type : Number,
        required : true
    }

});

// Creating a movie model - 

const Movie = new mongoose.model('Movie', movieSchema); // 
module.exports = Movie;
