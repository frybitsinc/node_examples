var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('index', {title: 'Heroku'});
  console.log('Welcome to MASICKDANG !');
});

module.exports = router;
