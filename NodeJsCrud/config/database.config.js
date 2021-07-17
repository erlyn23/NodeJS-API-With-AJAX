const mysql = require('mysql');
require('dotenv').config();

const { USER, HOST, DATABASE } = process.env;

let config = { 
    user: USER,
    host: HOST,
    database: DATABASE
};

const pool = mysql.createPool(config);

module.exports = pool;