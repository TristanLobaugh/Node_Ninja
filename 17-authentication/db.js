import knex from 'knex';

export const db = knex({
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: 'mypassword',
		database: 'test17_authenticate'
	}
});
