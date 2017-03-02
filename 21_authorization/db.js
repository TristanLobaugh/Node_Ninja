import knex from 'knex';

const	config = require('./knexfile')[process.env.NODE_ENV || 'development'];

export const db = knex(config);
