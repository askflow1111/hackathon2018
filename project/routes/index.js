var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/camera', function(req, res, next) {
  res.render('camera');
});

router.get('/detail', function(req, res, next) {
  res.render('detail');
});


module.exports = router;
