//IMPORT PACKAGE
const express = require('express');
const morgan = require('morgan');
const moviesRouter = require('./Routes/moviesRouter');

let app = express();

app.use(express.json());

app.use(express.static('./public'))

//USING ROUTES
app.use('/api/v1/movies', moviesRouter)

module.exports = app;





// // Here all the configurations related to app.js will be put //

// const express = require('express');
// const dotenv = require('dotenv')
// dotenv.config({ path: '../config.env' });
// const fs = require('fs');
// const morgan = require('morgan');
// const port = process.env.PORT || 3000;
// const moviesRouter = require('./Routes/moviesRouter');

// // We will create an object in which we will store a bunch of methods present in express - 

// let app = express();
// // let movies = JSON.parse(fs.readFileSync('./data/data.json'));


// // Making a middle ware - 

// // const logger = function (req, res, next) {
// //     console.log("Custom Middleware called");
// //     next();
// // }

// // app.use((req, res, next) => {
// //     req.requestedAt = new Date().toISOString();
// //     // console.log(requiredate);
// //     next();
// // });

// app.use(express.json()); // Middleware //
// app.use(logger);
// app.use(morgan('dev'));
// app.use(express.static('./public'))
// // app.use(requireDate);



// // console.log(process.env);



// // Creatinmg a movie doc using model - 

// // const testMovie = new Movie({
// //     name: "Hello",
// //     description: "Nice movie",
// //     ratings: 8,
// //     year: 2019
// // });

// // const testMovie2 = new Movie({
// //     name: "Don",
// //     description: "Hello there",
// //     ratings: 9,
// //     year: 2020
// // });

// // testMovie.save().then(doc => {
// //     console.log(doc);
// // }).catch(err => {
// //     console.log(err);
// // });


// // testMovie.save().then(doc => {
// //     console.log(doc);
// // }).catch(err => {
// //     console.log(err);
// // });

// // testMovie2.save().then(doc => {
// //     console.log(doc);
// // }).catch(err => {
// //     console.log(err);
// // })

// // Specifying some routes - 

// // A Route - HTTP Method + URL 

// // // Making an endpoint by which we will get the movies :

// // app.get('/api/v1/movies', getAllMovies)

// // // A POST Request - 

// // app.post('/api/v1/movies', updateAmovie);

// // // An API for getting a movie with provided id - 

// // app.get('/api/v1/movies/:id', getAmovie);

// // // An API for updating a particular thing in a movie - 

// // app.patch('/api/v1/movies/:id', patchAmovie);

// // // A route for deleting the movie - 

// // app.delete('/api/v1/movies/:id', deleteAmovie)

// // We can send a json object via postman to the server by putting the object in the body //

// // app.get('/', (req, res) => { // Whenever a request is made to the root URL , the call back function is executed.
// //     res.status(200).json({ message: 'Hello JSON', status: 200 }); // method chaining 
// // });

// // Chaning the routes //

// // making a router for movies (CRUD)

// // app.listen(port, (req, res) => {
// //     console.log(`server active on port ${port}`);
// //     // console.log(movies.length);
// // });

// // app.get('/' , (req , res) => {
// //     res.status(200).send("Hello there !!");
// // })

// app.use('/api/v1/movies', moviesRouter)

// module.exports = app;