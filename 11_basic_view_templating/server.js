import express from 'express';
import favicon from 'serve-favicon';

const app = express();
const staticAssets = 	`${__dirname}/public`;
const	faviconPath = `${__dirname}/../favicon.ico`;
const viewsPath = `${__dirname}/views`;

// Done using view engine Hoganjs using mustache syntax
app
	.set('views', viewsPath)
	.set('view engine', 'hjs')
	.use(express.static(staticAssets))
	.use(favicon(faviconPath))
	.get('/', (req, res) => {
		const title = 'My Title with HJS!';
		const tweets = [
			'1st tweet',
			'2nd tweet',
			'3rd tweet'
		];
		res.render('index', {
			title,
			tweets,
			showTweets: true,
			partials: {
				header: 'header',
				tweets: 'tweets'
			}
		});
	});

app.listen(3011);
