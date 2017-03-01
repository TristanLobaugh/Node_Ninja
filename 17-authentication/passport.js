import passport from 'passport';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcrypt-nodejs';
import { db } from './db';
// const LocalStrategy = require('passport-local').Strategy;

function authenticate(email, password, done) {
	db('users')
	.where('email', email)
	.first()
	.then(user => {
		if (!user || !bcrypt.compareSync(password, user.password)) {
			return done(null, false, { message: 'invalid user and password combination' });
		}
		done(null, user);
	}, done);
}

passport.use(new LocalStrategy(authenticate));

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
