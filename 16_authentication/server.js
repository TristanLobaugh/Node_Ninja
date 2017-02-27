import express from 'express';
import session from 'express-session';

const app = express();

// Sessions
app
	.use(session({ secret: 'Chewie is the best', resave: false, saveUninitialized: false }))
	.get('/', (req, res, next) => {
		res.send(req.session);
	})
	.get('/set', (req, res, next) => {
		req.session.name = 'Tristan';
		res.send(req.session);
	})
	.listen(3016);
