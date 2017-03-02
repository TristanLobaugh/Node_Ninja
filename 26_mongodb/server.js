import express from 'express';
import mongo from './db';

const app = express();

app
	.get('/', (req, res, next) => {
		mongo.db.collection('users')
			.find()
			.toArray((err, users) => {
				res.send(users);
			});
	})
	.get('/create/:first_name/:last_name/:email/:password', (req, res, next) => {
		mongo.db.collection('users')
			.insert(req.params, (err, result) => {
				res.send(result);
			});
	})
	.get('/updateEmail/:email/:newEmail', (req, res, next) => {
		mongo.db.collection('users')
			.updateOne(
				{ email: req.params.email },
				{ $set: { email: req.params.newEmail } },
				(err, result) => {
					res.send(result);
				});
	})
	.listen(3026);
