const fs = require('fs').promises;


async function readFile(filepath) {

	try {
		
		const data = await fs.readFile(filepath);
		console.log(data.toString());
	}
	catch(error) {
		console.error(`Got an error trying to read the file: ${error}`);
	}
}

readFile('greetings.txt');
