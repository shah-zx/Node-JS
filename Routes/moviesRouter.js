const express = require('express');
const moviesController = require('./../Controllers/moviesController');

const router = express.Router();

// router.param('id', moviesController.checkId) // Using the param middle ware defined in moviescontroller

router.param('id' , (req , res , next , value) => {
      console.log('movie id is' + value);
      next();
});

router.route('/')
    .get(moviesController.getAllMovies)
    .post(moviesController.createMovie) // validate body is a middle ware //


router.route('/:id')
    .get(moviesController.getMovie)
    .patch(moviesController.updateMovie)
    .delete(moviesController.deleteMovie)

module.exports = router;