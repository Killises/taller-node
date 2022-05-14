const mysql = require('mysql');
const util = require('util');
const config = require('./configdb');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.ENV_HOST,
    user: process.env.ENV_USER,
    password: process.env.ENV_PASSWORD,
    database: process.env.ENV_DATABASE
});

pool.query = util.promisify(pool.query);
module.exports = pool;