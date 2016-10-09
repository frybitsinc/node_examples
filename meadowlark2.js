var express = require('express');
var app = express();
var login = require('./lib/logged_in.js');
var logged_in = true;
//mssql connect
var Connection = require('tedious').Connection;
var config = {
 	userName: 'sangbusangjo1',  
        password: '1215082s!',  
        server: 'masickdangserver.database.windows.net',  
        // If you are on Microsoft Azure, you need this:  
        options: {encrypt: true, database: 'MASICKDANG'}
};
var fortune = require('./lib/fortune.js');

//handlebar view engine settings
var handlebars = require('express-handlebars').create({ defaultLayout:'main2' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
//app.post method : for insert query
app.post('/join', function(req, res){
	var user = {
		'userid':req.body.userid, 
		'password':req.body.password, 
		'nickname':req.body.nickname, 
		'email':req.body.email,
		'gender':req.body.gender }; 
});
app.post('/search', function(req, res){
	var menu = {
		'hours':req.body.hours, 
		'minutes':req.body.minutes, 
		'man':req.body.man, 
		'cheon':req.body.cheon,
		'menu':req.body.menu }; 
});
//app.get method : adds route
app.get('/login', function(req, res){
if(logged_in){	res.render('login', {login: './lib/logged_in.handlebars' });}

});
app.get('/', function(req, res){
	res.render('home');
});

app.get('/join', function(req, res){
	res.render('join');
});

app.get('/search', function(req, res){
	res.render('search');
var connection = new Connection(config);  
connection.on('connect', function(err) {  
	// If no error, then good to proceed.  
        console.log("Connected");
	if(err) return console.error(err);
	executeStatement();
});
var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  
  
    function executeStatement() {  
        request = new Request("SELECT ShopName from SHOP where SHOPNO IN (SELECT DISTINCT SHOPNO from MENU where TYPE = '주메뉴' and PRICE <= 3000)", function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });  
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        connection.execSql(request);  
    }  
});
app.get('/fortune', function(req, res){
	res.render('fortune', {fortune: fortune.getFortune()});
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
