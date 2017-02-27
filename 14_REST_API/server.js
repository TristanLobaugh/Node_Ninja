import express from 'express';
import bodyParser from 'body-parser';
import knex from 'knex';

const db = knex({
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: 'mypassword',
		database: 'test'
	}
});
const app = express();

// Building a RESTful api
// GET /users get all users
// GET /user/:id get single user
// POST /users create a user
// PUT /users/:id edit or update a user
// DELETE /users/:id delete a user

app
	.use(bodyParser.json())
	.get('/users', (req, res, next) => {
		db('users').then(users => {
			res.send(users);
		}, next);
	})
	.get('/users/:id', (req, res, next) => {
		const { id } = req.params;
		db('users')
		.where('id', id)
		.then(users => {
			res.send(users);
		}, next);
	})
	.listen(3014)
;
