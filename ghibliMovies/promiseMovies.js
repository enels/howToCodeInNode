const axios = require('axios');
const fs = require('fs');

axios.get('https://ghibliapi.herokuapp.com/films')
// skp error checking because axios will not fulfil a promise if there's a response error
	.then((response) => {
		console.log('Successfully retrieved our list of movies');
		response.data.forEach(movie => {
			console.log(`${movie['title']}, ${movie['release_data']}`);
		});
	
	return fs.writeFile('promiseMovies.csv', moveList);
	
	})
	.then (() => {

		console.log('Save our list of movies to promiseMovies.csv');
	})
	.catch((error) => {
		console.error(`Could not save the Ghibli movies to a file: ${error}`);
	});
