var express = require('express');
var app = express();
//mssql connect
var sql = require('mssql');
var config = {
	user:'sangbusangjo1', 
	password:'1215082s!', 
	server:'masickdangserver', 
	database:'masickdangDB',
	stream:true,
	options:{
		encrypt:true
	} 
}
//var connection = new sql.Connection(config, function(err){
	//error check
//	console.log("connection error");
	
//	var query = connection.query('select * from dbo.SHOP',funtion(err, recordset){
//		console.dir(recordset);
		//res.json(recordset);
//	});
//	console.log(query);
//});

//handlebar view engine settings
var handlebars = require('express-handlebars').create({ defaultLayout:'main2' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

var fortunes = [
	"GOOOOOD", 
	"IILLLLL", 
	"CHILLLL",
	"SSWEEEEEET",
	"LOVELYY!!", 
	"FANTASTIC!",
	"EVERY THINGS GONNA BE ALLRIGHT!", 
	"BUY LOTTO!!!!!!",  
	"BAAAAAAAADDD", 
	"SOOOOOSOOOOOO", 
	"MISERABLE", 
	"PATHETIC", 
];

app.set('port', process.env.PORT || 3000);
//app.post method : for insert query
app.post('/join', function(req, res){
	var user = {
		'userid':req.body.userid, 
		'password':req.body.password, 
		'nickname':req.body.nickname, 
		'email':req.body.email,
		'gender':req.body.gender };
	var query = connection.query('insert into users set ?',user,function(err,result){
		if(err){
			console.error(err);
			throw err;
		}
		console.log(query);
		res.send(200, 'success');
	});	
});
//app.get method : adds route
app.get('/login', function(req, res){
	sql.connect(config, function(err){
//		var req = new sql.Request();
//		req.stream = true;
//		req.query('select * from dbo.SHOP');
//		var data = "<html> <head> <title> mssql test</title> </head>"
//		data += "<h1>TEST</h1>"
//		data += "<table border=\"1\">"
//		data += "<tr><th>IP</th><th>CURDATE</th><tr>"
//		req.on('row', function(row){
//			data += "<tr>"
//			data += "<td>" + row.IP + "</td>"
//			data += "<td>" + row.CURDATE + "</td>";
//			data += "</tr>"
//		});
//		req.on('done', function(returnValue){
//			data += "</table></html>" 
//			res.send(data);
//		});
	});
	//var query = connection.query('select * from dbo.SHOP',funtion(err, recordset){
	//	console.dir(recordset);
	//	res.json(recordset);
	//});
	//console.log(query);
	res.render('login');
});

app.get('/join', function(req, res){
	res.render('join');
});

app.get('/search', function(req, res){
	res.render('search');
});
app.get('/fortune', function(req, res){
	var randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
	res.render('fortune', {fortune: randomFortune});
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
