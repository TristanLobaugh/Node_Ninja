exports.homepage = function(req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.end('<h1>Hello World</h1>');
};

exports.profile = function(req, res) {
	const profile = {
		name: 'Tristan',
		dog: 'Chewie'
	};
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(profile));
};

exports.notFound = function(req, res) {
	res.statusCode = 404;
	res.setHeader('Content-Type', 'text/html');
	res.end('<h1>404 NOT FOUND!</h1>');
};
