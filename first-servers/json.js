const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
	res.setHeader("Content-type", "application/json");
	res.writeHead(200);
	res.end(`{"message": "This is a JSON response"}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	
	console.log(`Server is litening on ${host}:${port}`);
});
