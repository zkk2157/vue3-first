const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
   
    user:'root',
    database:'node-mysql',
    password:'zjy2157ZKK',
    port: 3306,
});