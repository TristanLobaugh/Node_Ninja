export function homepage(req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.end('<h1>Hello World</h1>');
}

export function profile(req, res) {
	const id = {
		name: 'Tristan',
		dog: 'Chewie'
	};
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(id));
}

export function notFound(req, res) {
	res.statusCode = 404;
	res.setHeader('Content-Type', 'text/html');
	res.end('<h1>404 NOT FOUND!</h1>');
}
