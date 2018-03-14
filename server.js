//dependencies
var express = require('express');
var methodOverride = require('method-override');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var path = require('path');
var exphbs = require('express-handlebars');


app.use(methodOverride('X-HTTP-Method-Override'))

app.use(bodyParser.urlencoded({ extended: true }));


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');





app.listen(PORT, function() {
	console.log('app listening on PORT: ' + PORT);
});
