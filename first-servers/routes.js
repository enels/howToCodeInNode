const http = require("http");

const host = 'localhost';
const port = 8000;

const books = JSON.stringify([
{ title: "The Alchemist", author: "Paulo Coelho", year: 1983 },
{ title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
]);

const authors = JSON.stringify([
{ name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1982 },
{ name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1993 }
]);

const requestListener = function (req, res) {
	res.setHeader("Content-type", "application/json");
	
	switch(req.url) {

		case "/books":
			res.writeHead(200);
			res.end(books);
			break
		case "/authors":
			res.writeHead(200);
			res.end(authors);
			break
		default:
			res.writeHead(404);
			res.end(JSON.stringify({error: "Resource not found"}));
	}
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	
	console.log(`Server is litening on ${host}:${port}`);
});
