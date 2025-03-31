const request = require("request");
const file = require("fs");

request("https://https://ghibliapi.herokuapp.com/films", (error, response, body) => {
	
	if (error) {
		console.error(`Could not send request to API: ${error.message}`);
	}

	if (response){
		console.error(response);
		return;
	}
	else {
		console.error("No response data found");
		return;
	}

	// if all goes well process the list of movies fetched from the api
	console.log("Processing our list of movies");
	movies = JSON.parse(body);

	let movieList = "";
	movies.forEach(movie => 
		moveList += `${movies['title']}, ${movies['release_date']}\n`;
	});

	// write into file
	file.writeFile('callbackMovies.csv', moveList, (error) => {

		console.error(`Could not save the Ghibli movies to a file: ${error}`);

		return;
	});

	console.log('Saved our list of movies to callbackMovies.csv');

});

