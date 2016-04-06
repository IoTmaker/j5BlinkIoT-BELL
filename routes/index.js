var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IoT for Arduino with Firmata using Johnny-Five, Angular and WebSockets' });
});

module.exports = router;
