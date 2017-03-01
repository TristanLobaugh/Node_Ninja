import passport from 'passport';
import LocalStrategy from 'passport-local';
import GitHubStrategy from 'passport-github';
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

function register(req, email, password, done) {
	db('users')
	.where('email', email)
	.first()
	.then(user => {
		if (user) {
			return done(null, false, { message: `Sorry, username "${email}" already exists` });
		}
		if (password !== req.body.password2) {
			return done(null, false, { message: 'Sorry, passwords don\'t match' });
		}
		const newUser = {
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email,
			password: bcrypt.hashSync(password)
		};
		db('users')
		.insert(newUser)
		.then(ids => {
			newUser.id = ids[0];
			done(null, newUser);
		});
	});
}

passport.use(new LocalStrategy(authenticate));
passport.use('local-register', new LocalStrategy({ passReqToCallback: true }, register));
passport.use(new GitHubStrategy({
	clientID: 'github_id',
	clientSecret: 'github_secret',
	callbackURL: 'http://localhost:3021/auth/github/callback'
}, (accessToken, refreshToken, profile, done) => {
	db('users')
		.where('oauth_provider', 'github')
		.where('oauth_id', profile.username)
		.first()
		.then(user => {
			if (user) {
				return done(null, user);
			}
			const newUser = {
				oauth_provider: 'github',
				oauth_id: profile.username,
			};
			return db('users')
			.insert(newUser)
			.then(ids => {
				newUser.id = ids[0];
				done(null, newUser);
			});
		});
}
));

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
