var sql = require('mssql');
var express = require("express");
//var Connection = require('mssql').Connection;
var config = {
	userName: 'sangbusangjo1', 
	password: '1215082s!', 
	server: 'masickdangserver', 
	// if u r on MS Azure, u need this sh
	options: {encrypt: true, database: 'masickdang'}
};

var app = express();
app.set('port', process.env.PORT||8080);
app.get("/", function(req, res){
	sql.connect(config, function(err){
		console.log("connected");
		var req = new sql.Request();
		req.stream = true;
		req.query('select * from dbo.SHOP');
		var data = "<html><head><title>mssql test</title></head>"
		data+="<h1>TEST</h1>"
		data+="<table border=\"1\">"
		data+="<tr><th>IP</th><th>CURDATE</th></tr>"
		req.on('row', function(row){
			console.log("query success");
			data+="<tr>"
			data+="<td>"+row.IP+"</td>"
			data+="<td>"+row.CURDATE+"</td>"
			data+="</tr>"
		});
		req.on('done', function(returnValue){
			console.log("done")
			data+="</table></html>"
			res.send(data);
		});
	});
//	connection.on('error', function(err){
//		console.log("db conection error");
//	});
});
app.listen(app.get('port'), function(){
	console.log('EXPRESS started on http://localhost:'+app.get('port')+'press ctrl_C to terminate.');
});
