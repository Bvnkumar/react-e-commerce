var express = require('express');
var router = express.Router();
var MongoUtil=require('../lib/mongoUtil');

/* GET home page. */
router.get('/', function(req, res, next) {
  var db=MongoUtil.getDb();

  res.render('index', { title: 'Express' });
});

module.exports = router;
