const CONNECT_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/webtask';

const pgp = require('pg-promise')();

// Heroku's free Postgres database only supports 20 connections,
// limit the pool size to Heroku's limit.
pgp.pg.defaults.poolSize = 20;
console.log('database is connecting to', CONNECT_URL);
module.exports = pgp(CONNECT_URL);
