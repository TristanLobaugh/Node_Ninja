module.exports = {
	development: {
		client: 'mysql',
		connection: {
			host: '127.0.0.1',
			user: 'root',
			password: 'mypassword',
			database: 'test17_authenticate'
		}
	},
	production: {
		client: 'mysql',
		connection: {
			host: 'production',
			user: 'production',
			password: 'myPassword',
			database: 'test'
		}
	}
};
