import express from 'express';
import bodyParser from 'body-parser';
import knex from 'knex';

const db = knex({
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: 'L1234nkag34',
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
	.get('/tweets', (req, res) => {
		db('tweets').then(tweets => {
			res.send(tweets);
		})
		// include catches for error handling
		.catch(err => {
			console.log(err);
			res.send(err);
		});
	})
	.get('/users', (req, res) => {
		db('users').then(users => {
			res.send(users);
		})
		.catch(err => {
			console.log(err);
			res.send(err);
		});
	})
	.listen(3013)
;
