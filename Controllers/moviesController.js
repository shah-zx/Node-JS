// const fs = require('fs');
const Movie = require('../Models/movieModel')
// let movies = JSON.parse(fs.readFileSync('./data/data.json'));



// exports.checkId = (req, res, next, value) => { //  A param middle ware which makes sure if the movie with given id is present or not //
//     console.log('Movie ID is ' + value);

//     //FIND MOVIE BASED ON ID PARAMETER
//     let movie = movies.find(el => el.id === value * 1);

//     if(!movie){
//         return res.status(404).json({
//             status: "fail",
//             message: 'Movie with ID ' +value+ ' is not found'
//         })
//     }
//     next();
// }

// exports.validateBody = (req, res, next) => { // A middle ware which makes sure if the create movie route is having a valid body or not //
//     if(!req.body.name || !req.body.releaseYear){
//         return res.status(400).json({
//             status: 'fail',
//             message: 'Not a valid movie data, please provide the name and release year !!'
//         });
//     }
//     next();
// }

exports.getAllMovies = async (req, res) => {

    // res.status(200).json({  // This was the logic when the data was handled locally //
    //     status: "sucess",
    //     requestedAt: req.requestedAt,
    //     count: movies.length,
    //     data: {
    //         movies: movies
    //     }
    // });

    try {
        const movies = await Movie.find({duration : +req.query.duration , ratings : req.query.ratings})
        res.status(200).json(
            {
                status: "Success",
                data: {
                    movies
                }
            }
        )
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }



}

exports.getMovie = async (req, res, id) => {
    //console.log(req.params);
    //CONVERT ID TO NUMBER TYPE
    // const id = req.params.id * 1;

    // //FIND MOVIE BASED ON ID PARAMETER
    // let movie = movies.find(el => el.id === id);

    // // if(!movie){
    // //     return res.status(404).json({
    // //         status: "fail",
    // //         message: 'Movie with ID ' +id+ ' is not found'
    // //     })
    // // }

    // //SEND MOVIE IN THE RESPONSE
    // res.status(200).json({
    //     status: "success",
    //     data: {
    //         movie: movie
    //     }
    // });
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(201).json({
            status: "Success",
            data: {
                movie: movie
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }




}

exports.createMovie = async (req, res) => {
    //console.log(req.body);
    // const newId = movies[movies.length - 1].id + 1;
    // const newMovie = Object.assign({id: newId}, req.body)
    // movies.push(newMovie);
    // fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
    //     res.status(201).json({
    //         status: "success",
    //         data: {
    //             movie: newMovie
    //         }
    //     })
    // })
    // //res.send('Created');
    try {
        const movie = await Movie.create(req.body);
        // The resolved promise object will be shown here - 

        res.status(201).json({
            status: 'Success',
            data: {
                movie: movie
            }
        })

    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: "Not a valid object"
        })

    }
}

exports.updateMovie = async (req, res) => {
    // let id = req.params.id * 1;
    // let movieToUpdate = movies.find(el => el.id === id);

    // // if(!movieToUpdate){
    // //     return res.status(404).json({
    // //         status:'fail',
    // //         message: 'No movie object with ID ' +id+ ' is found'
    // //     })

    // // }
    // let index = movies.indexOf(movieToUpdate);//e.g. - id = 4, index = 3

    // Object.assign(movieToUpdate, req.body);

    // movies[index] = movieToUpdate;

    // fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
    //     res.status(200).json({
    //         status: "success",
    //         data: {
    //             movie: movieToUpdate
    //         }
    //     })
    // })

    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.status(200).json({
            status: "Success",
            data: {
                movie: updatedMovie
            }
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.deleteMovie = async (req, res) => {
    // const id = req.params.id * 1;
    // const movieToDelete = movies.find(el => el.id === id);

    // // if(!movieToDelete){
    // //     return res.status(404).json({
    // //         status:'fail',
    // //         message: 'No movie object with ID ' +id+ ' is found to delete'
    // //     })

    // // }

    // const index = movies.indexOf(movieToDelete);

    // movies.splice(index, 1);

    // fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
    //     res.status(204).json({
    //         status: "success",
    //         data: {
    //             movie: null
    //         }
    //     })
    // })
    try {
        await Movie.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "Success",
            message: "Movie deleted"
        })
    } catch (error) {
       res.status(404).json({
        status : "Fail", 
        message : "No movie with given id."
       })
    }

}