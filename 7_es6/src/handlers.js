// es6 functionality
export function homepage(req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.end('<h1>Hello World!!!</h1>');
}

export function notFound(req, res) {
	res.statusCode = 404;
	res.setHeader('Content-Type', 'text/html');
	res.end('<h1>404 Sorry Not Found</h1>');
}
