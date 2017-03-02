import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import authRoutes from './routes/auth';
import postsRoutes from './routes/posts';
import cache from './cache';
import { db } from './db';

// need to start with redis-server
const RedisStore = require('connect-redis')(session);

require('./passport');

const app = express();

app
	.set('view engine', 'hjs')
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }))
	.use(session({
		store: new RedisStore(),
		secret: 'Chewie is the best dog',
		resave: false,
		saveUninitialized: false
	}))
	.use(passport.initialize())
	.use(passport.session())
	.use(authRoutes)
	.use(postsRoutes)
	.get('/', cache.route({ expire: 5, prefix: 'home' }), (req, res, next) => {
		setTimeout(() => {
			const headlines = [
				'Red is the new black',
				'Chewie is great!',
				'How cool is this'
			];
			res.render('headlines', { headlines });
			// res.send({
			// 	session: req.session,
			// 	user: req.user,
			// 	authenticated: req.isAuthenticated()
			// });
		}, 3000);
	})
	.listen(3021);
