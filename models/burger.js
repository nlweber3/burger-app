var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");


var burger = sequelize.define("burger", {
	burger_name: {
		type: DataTypes.STRING
	},
	devoured: {
		type: DataTypes.BOOLEAN
	}
}, {
	timestamps: false
});

burger.sync();

app.get("/api/all", function(req, res) {
	burger.findAll[{}].then(function(results) {
		res.json(results);
	});
});


module.exports = burger;