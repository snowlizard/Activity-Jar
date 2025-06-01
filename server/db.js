const Pool = require("pg").Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.USER,
    password: process.env.PASS,
    host: process.env.HOST,
    port: parseInt(process.env.PORT),
    database: process.env.DATABASE
});

module.exports = pool;