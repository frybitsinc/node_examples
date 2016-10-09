var sql = require('mssql');

sql.connect("mssql://sangbusangjo1:1215082s!@masickdangserver.database.windows.net/masickdang").then(function(){
  //query
  new sql.Request().query('select * from REVIEWS where SHOPNO = 1').then(function(recordset){
    console.dir(recordset);
  }).catch(function(err){
      //query error check 
      console.log("query error")
  });
  //stored procedure

}).catch(function(err){
      console.log("connection error");
});

