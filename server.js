//dependencies
var express = require('express');
var methodOverride = require('method-override');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');


app.use(methodOverride('X-HTTP-Method-Override'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());






app.listen(PORT, function() {
	console.log('app listening on PORT: ' + PORT);
});
