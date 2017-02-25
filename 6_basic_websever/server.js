const http = require('http');
const handlers = require('./handlers');

const server = http.createServer((req, res) => {
	// const headers = req.headers;
	// const method = req.method;
	const url = req.url;

	// console.log(headers, method, url);
	// console.log(url);

	if (url === '/') {
		handlers.homepage(req, res);
	} else if (url === '/profile') {
		handlers.profile(req, res);
	} else {
		handlers.notFound(req, res);
	}
});

server.listen(3000);
