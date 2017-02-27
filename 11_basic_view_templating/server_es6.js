import express from 'express';
import favicon from 'serve-favicon';

const app = express();
const staticAssets = 	`${__dirname}/public`;
const	faviconPath = `${__dirname}/../favicon.ico`;

// Done using es6 template string
app
	.use(express.static(staticAssets))
	.use(favicon(faviconPath))
	.get('/', (req, res) => {
		const title = 'My Title!';
		const tweets = [
			'1st tweet',
			'2nd tweet',
			'3rd tweet'
		];
		const tweetHTML = tweets.reduce((html, tweet) => `${html}<li>${tweet}</li>`, '');
		res.send(`
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>Node.js single page app</title>
				<link rel="stylesheet" type="text/css" href="/css/main.css">
			</head>
			<body>
				<h1>${title}</h1>
				<ul>${tweetHTML}</ul>
				<script src="/js/scripts.js"></script>
			</body>
			</html>
		`);
	});

app.listen(3011);
