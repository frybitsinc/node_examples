var express = require('express');

var app = express();

//handlebar view engine settings
var handlebars = require('express-handlebars').create({ defaultLayout:'main2' });
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
app.get('/login', function(req, res){
	res.render('login');
});

app.get('/join', function(req, res){
	res.render('join');
});

app.get('/search', function(req, res){
	res.render('search');
});
app.get('/about', function(req, res){
	res.render('search');
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
