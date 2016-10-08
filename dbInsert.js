var sql = require('mssql');

sql.connect("mssql://sangbusangjo1:1215082s!@masickdangserver.database.net/masickdang").then(function(){
  //query
  new sql.Request().query('select * from dbo.shop').then(function(recordset){
    console.dir(recoedset);
  }).catch(function(err){
      //query error check 
      console.log("query error")
  });
  //stored procedure

}).catch(function(err){
      console.log("connection error");
});

