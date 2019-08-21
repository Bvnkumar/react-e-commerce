var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

 console.log("req.body ", req.body);
  res.send('success');
});

module.exports = router;
