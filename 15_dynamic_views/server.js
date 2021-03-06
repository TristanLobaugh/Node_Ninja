import express from 'express';
import bodyParser from 'body-parser';
import knex from 'knex';

const db = knex({
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: 'myPassword',
		database: 'test'
	}
});
const app = express();
const staticAssets = `${__dirname}/public`;


// Building a RESTful api
// GET /users get all users
// GET /user/:id get single user
// POST /users create a user
// PUT /users/:id edit or update a user
// DELETE /users/:id delete a user

app
	.use(bodyParser.json())
	.set('view engine', 'hjs')
	.use(express.static(staticAssets))

	.get('/', (req, res, next) => {
		db('users').then(users => {
			res.render('users', {
				title: 'All Users',
				users
			});
		}, next);
	})
	.get('/viewtweets/:user_id', (req, res, next) => {
		const { user_id } = req.params;
		db('tweets')
		.where('user_id', user_id)
		.then(tweets => {
			res.render('tweets', {
				title: 'My Users Tweets',
				tweets
			});
		}, next);
	})
	.get('/users', (req, res, next) => {
		db('users').then(users => {
			res.send(users);
		}, next);
	})
	.get('/users/:id', (req, res, next) => {
		const { id } = req.params;
		db('users')
		.where('id', id)
		.first()
		.then(users => {
			if (!users) {
				return res.sendStatus(400);
			}
			res.send(users);
		}, next);
	})
	.post('/users', (req, res, next) => {
		db('users')
		.insert(req.body)
		.then(userIds => {
			res.send(userIds);
		}, next);
	})
	.put('/users/:id', (req, res, next) => {
		const { id } = req.params;
		db('users')
		.where('id', id)
		.update(req.body)
		.then(result => {
			if (result === 0) {
				return res.sendStatus(400);
			}
			res.sendStatus(200);
		}, next);
	})
	.delete('/users/:id', (req, res, next) => {
		const { id } = req.params;
		db('users')
		.where('id', id)
		.delete()
		.then(result => {
			if (result === 0) {
				return res.sendStatus(400);
			}
			res.sendStatus(200);
		}, next);
	})
	.listen(3015)
;
