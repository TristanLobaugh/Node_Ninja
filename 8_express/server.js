const express = require('express');

const app = express();

app
	.use((req, res, next) => {
		const id = { name: 'Chewie' };
		req.id = id;
		next();
		// if (req.method === 'GET' && req.url === '/') {

		// 	res.send('<h1>Hi! using .use</h1>');
		// } else {
		// 	next();
		// }
	})
	.get('/', (req, res) => {
		res.send('<h1>Hello World with Express!</h1>');
	})
	.get('/profile', (req, res) => {
		const profile = { name: 'Tristan' };
		res.send(req.id);
	});


app.listen(3008);
