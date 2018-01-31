var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Josias' });
});


router.get('/data', function(req, res, next) {
  res.render('index', { title: 'Data Uri' });
});

router.get('/data1', function(req, res, next) {
  res.render('index', { title: 'Data Uri' });
});


router.get('/data2', function(req, res, next) {
  res.render('newview', { title: 'DMataladd' });
});

module.exports = router;
