const mongoose = require('mongoose');
const fs = require('fs')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' });

// Movie model - 
const Movie = require('./../Models/movieModel')

mongoose.connect(process.env.CONN_STR)
    .then((conn) => {
        console.log('DB Connection Successful');
    })
    .catch((error) => {
        console.log('Some error has occurred');
    });


// Reading the file - 
const movies = JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'));

const deleteMovies = async (req, res) => {
    try {
        await Movie.deleteMany();
        console.log("Data successfully deleted !!");
    } catch (error) {
        console.log(error);
    }
}

// Importing the data in database - 

const addMovies = async () => {
    try {
        await Movie.create(movies);
        console.log("Data successfully added !!");
    } catch (error) {
        console.log(error);
    }
    process.exit()
}

// console.log(process.argv); // Gives the processes going on in background  //

if (process.argv[2] === '--import') {
    addMovies();
}

if (process.argv[2] === '--delete') {
    deleteMovies();
}

// deleteMovies();
// addMovies();