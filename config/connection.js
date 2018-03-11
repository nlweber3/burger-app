var mysql = require('mysql');

require('dotenv').config();

var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: process.env.PASSWORD,
	database: 'burgers_db'
})


connection.connect(function(err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log("connected as id: " + connection.threadId);
});


module.exports = connection;