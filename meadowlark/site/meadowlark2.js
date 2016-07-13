var express = require('express');

var app = express();

//handlebar view engine settings
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

var fortunes = [
	"GOOOOOD", 
	"BAAAAAAAADDD", 
	"SOOOOOSOOOOOO", 
	"MISERABLE", 
	"PATHETIC", 
];

app.set('port', process.env.PORT || 3000);
//app.get method : adds route
app.get('/', function(req, res){
	res.render('home');
});

app.get('/about', function(req, res){
	var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', {fortune: randomFortune});
});

//add static middleware
app.use(express.static(__dirname + '/public'));

//404 폴백(catch-all) handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('about');
});

//500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');	
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' +
		app.get('port') + '; press Ctrl-C to terminate. ');
});
