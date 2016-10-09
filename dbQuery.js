var Connection = require('tedious').Connection;
var config = {
 	userName: 'sangbusangjo1',  
        password: '1215082s!',  
        server: 'masickdangserver.database.windows.net',  
        // If you are on Microsoft Azure, you need this:  
        options: {encrypt: true, database: 'MASICKDANG'}
};
var connection = new Connection(config);  
connection.on('connect', function(err) {  
	// If no error, then good to proceed.  
        console.log("Connected");
	if(err) return console.error(err);
	executeStatementuser();
});
var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  
  
    function executeStatement() {  
        request = new Request("SELECT * FROM REVIEWS WHERE SHOPNO = 1", function(err) {  
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
function executeStatementuser() {  
        request = new Request("SELECT * FROM USERS", function(err) {  
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




function executeStatement1() {  
        request = new Request("Insert Into USERS Values(4, 'testId', '테스트', 'testPassword', 'W', '1988', '08', '21', 'ddd@ddd.dd', GetDate())", function(err) {  
        if (err) { console.log(err);}  
        });  
      
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                console.log("Product id of inserted item is " + column.value);  
              }  
            });  
        });    
        connection.execSql(request);  
    }  	

