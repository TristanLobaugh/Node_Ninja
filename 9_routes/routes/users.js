const express = require('express');

const router = express.Router();

const users = [{
  'id': 1,
  'first_name': 'Nicole',
  'last_name': 'Henderson',
  'email': 'nhenderson0@ustream.tv',
  'gender': 'Female',
  'ip_address': '201.180.73.87'
}, {
  'id': 2,
  'first_name': 'Jerry',
  'last_name': 'Harris',
  'email': 'jharris1@boston.com',
  'gender': 'Male',
  'ip_address': '204.247.150.80'
}, {
  'id': 3,
  'first_name': 'Johnny',
  'last_name': 'Bradley',
  'email': 'jbradley2@ucoz.com',
  'gender': 'Male',
  'ip_address': '8.51.30.100'
}, {
  'id': 4,
  'first_name': 'Thomas',
  'last_name': 'Gordon',
  'email': 'tgordon3@dell.com',
  'gender': 'Male',
  'ip_address': '137.187.78.225'
}, {
  'id': 5,
  'first_name': 'Anna',
  'last_name': 'Bradley',
  'email': 'abradley4@shinystat.com',
  'gender': 'Female',
  'ip_address': '91.101.137.201'
}, {
  'id': 6,
  'first_name': 'Philip',
  'last_name': 'Fisher',
  'email': 'pfisher5@ning.com',
  'gender': 'Male',
  'ip_address': '64.80.149.145'
}, {
  'id': 7,
  'first_name': 'Amanda',
  'last_name': 'Jenkins',
  'email': 'ajenkins6@freewebs.com',
  'gender': 'Female',
  'ip_address': '36.187.99.63'
}, {
  'id': 8,
  'first_name': 'Patricia',
  'last_name': 'Price',
  'email': 'pprice7@plala.or.jp',
  'gender': 'Female',
  'ip_address': '11.137.188.72'
}, {
  'id': 9,
  'first_name': 'Frances',
  'last_name': 'Myers',
  'email': 'fmyers8@mashable.com',
  'gender': 'Female',
  'ip_address': '207.219.131.34'
}, {
  'id': 10,
  'first_name': 'Peter',
  'last_name': 'Watson',
  'email': 'pwatson9@nasa.gov',
  'gender': 'Male',
  'ip_address': '74.138.213.205'
}];

router
// name of params after : put into an object called req.params
// make one of the parmas optional add ? after
	// .get('/:id/:name/:lastName?', (req, res) => {
	// 	console.log(req.params);
	// 	res.send('ok');
	// });

// get info through html query
		// .get('/', (req, res) => {
		// 	console.log(req.query);
		// 	res.send('ok');
		// });

// post request come through req.body
		// .post('/', (req, res) => {
		// 	console.log(req.body);
		// 	res.send('ok');
		// });

// make simple api
	.get('/', (req, res) => {
		res.send(users);
	})
	.get('/:id', (req, res) => {
		const { id } = req.params;
		const person = users.find(user => user.id === Number(id));
		if (person) {
			res.send(person);
		} else {
			res.status(404).send(`User ${id} does not exist`);
		}
	})
	.delete('/:id', (req, res) => {
		const { id } = req.params;
		const index = users.findIndex(user => user.id === Number(id));

		if (index > -1) {
			users.splice(index, 1);
			res.send(users);
		} else {
			res.status(404).send(`User ${id} does not exist`);
		}
	});

module.exports = router;
