const https = require('https');


// create a js object that contains a method key
const options = {
	method: 'GET'
};

let request = https.request('https://jsonplaceholder.typicode.com/users?_limit=2', options, (res) => {

	if (res.statusCode !== 200) {

		console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);

		res.resume();

		return;
	}

	let data = '';

	res.on('data', (chunk) => {
		
		data += chunk;
	});

	res.on('close', () => {
		console.log('Retrieved all data');
		console.log(JSON.parse(data));
	});
});

request.end();


request.on('error', (err) => {

	console.error(`Encountered an error trying to make a request: ${err.message}`);
});
