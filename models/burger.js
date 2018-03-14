var Sequelize = require("sequelize");

var connection = require("../config/connection.js");


var burger = sequelize.define("burger", {
	burger_name: {
		type: Sequelize.STRING
	},
	devoured: {
		type: Sequelize.BOOLEAN
	}
}, {
	timestamps: false
});

burger.sync();


module.exports = burger;