import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import authRoutes from './routes/auth';
import postsRoutes from './routes/posts';
import { db } from './db';

require('./passport');

const app = express();

app
	.set('view engine', 'hjs')
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }))
	.use(session({ secret: 'Chewie is the best dog', resave: false, saveUninitialized: false }))
	.use(passport.initialize())
	.use(passport.session())
	.use(authRoutes)
	.use(postsRoutes)
	.get('/', (req, res, next) => {
		res.send({
			session: req.session,
			user: req.user,
			authenticated: req.isAuthenticated()
		});
	})
	.listen(3021);
