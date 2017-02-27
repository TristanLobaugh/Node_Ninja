import express from 'express';
import favicon from 'serve-favicon';

const app = express();
const staticAssets = `${__dirname}/public`;
const faviconPath = `${__dirname}/public/favicon.ico`;

app
	.use(express.static(staticAssets))
	.use(favicon(faviconPath))
	.get('/api/profile', (req, res) => {
		const profile = { name: 'Tristan' };
		res.send(profile);
	});

app.listen(3010);
