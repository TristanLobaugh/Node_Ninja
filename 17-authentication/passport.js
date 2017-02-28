import passport from 'passport';
import LocalStrategy from 'passport-local';
import { db } from './db';
// const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(authenticate));

function authenticate(email, password, done) {
	db('users')
	.where('email', email)
	.first()
	.then(user => {
		if (!user || user.password !== password) {
			return done(null, false, { message: 'invalid user and password combination' });
		}
		done(null, user);
	}, done);
}

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	db('users')
	.where('id', id)
	.first()
	.then(user => {
		done(null, user);
	}, done);
});
