import passport from 'passport';
import express from 'express';

const router = express.Router();

router
	.get('/login', (req, res, next) => {
		res.render('login');
	})
	.post('/login', passport.authenticate('local', {
		successRedirect: '/posts',
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
		successRedirect: '/posts',
		failureRedirect: '/signup'
	}))
	.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }))
	.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
    // Successful authentication, redirect home.
	res.redirect('/');
});

module.exports = router;
