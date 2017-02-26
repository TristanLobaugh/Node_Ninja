import http from 'http';
import { homepage, profile, notFound } from './handlers';

const server = http.createServer((req, res) => {
	// const headers = req.headers;
	// const method = req.method;
	const url = req.url;

	// console.log(headers, method, url);
	// console.log(url);

	if (url === '/') {
		homepage(req, res);
	} else if (url === '/profile') {
		profile(req, res);
	} else {
		notFound(req, res);
	}
});

server.listen(3006);
