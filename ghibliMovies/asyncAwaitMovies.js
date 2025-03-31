const axios = require('axios');
const fs = require('fs').promises;

// creat an async function
async function saveMovies() {
	try {
		let response = await axios.get('https://ghibliapi.herokuapp.com/films');
	
		let movieList = '';

		response.data.forEach(movie => {
			movieList += `${movie['title']}, ${movie['release_date']}\n`;
		});

		// write movie data to a file
		await fs.writeFile('asynchAwaitMovies.csv', movieList);
	}
	catch (error) {
		console.error(`Could not save the Ghibli movies to a file: ${error}`);
	}
}

saveMovies();
