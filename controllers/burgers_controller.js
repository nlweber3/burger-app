var burger = require('../models/burger.js');
var express = require('express');
var router = express.Router();
console.log('working');


var sequelizeConnection = models.sequelize;


sequelizeConnection.sync();


router.get('/', function (req, res) {
    res.redirect('/index');
});

// router.get('/index', function (req, res) {

//     models.burger.findAll({
//         indlude: [{model: models.devourers}]
//     }).then
// }




module.exports = router;