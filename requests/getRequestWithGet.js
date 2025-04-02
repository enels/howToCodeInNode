const https = require('https');


let request = https:.get('https://jsonplaceholder.typicode.com/users?_limit=2' (res) => {
	
	if (res.statusCode !== 200) {
		console.log(`Did not get an OK from the server. Code: ${res.statusCode}`);

		res.resume();

		return;
	}
});
