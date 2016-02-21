var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gugum', { title: 'page gugum js' });
});

module.exports = router;
