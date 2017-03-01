import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
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
	.get('/', (req, res, next) => {
		res.send({
			session: req.session,
			user: req.user,
			authenticated: req.isAuthenticated()
		});
	})
	.get('/login', (req, res, next) => {
		res.render('login');
	})
	.post('/login', passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/login'
	}))
	.get('/logout', (req, res, next) => {
		req.session.destroy(err => {
			res.redirect('/login');
		});
	})
	.get('/signup', (req, res, next) => {
		res.render('signup');
	})
	.post('/signup', passport.authenticate('local-register', {
		successRedirect: '/',
		failureRedirect: '/signup'
	}))
	.listen(3017);
