const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.USER,
    password: "v90sx",
    host: "192.168.1.17",
    port: process.env.PORT,
    database: 'homelab'
});

module.exports = pool;