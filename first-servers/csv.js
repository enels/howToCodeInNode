const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
	
	res.setHeader("Content-type", "text/csv");
	res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
	res.writeHead(200);
	res.end(`id,name,email\n1,Enoma Uwaifo,enomauwaifo@gmail.com`);
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	
	console.log(`Server is litening on ${host}:${port}`);
});
