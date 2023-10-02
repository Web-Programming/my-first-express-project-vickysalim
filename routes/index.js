var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', function(req, res, next){
  res.render('profile',
  {
    title: 'Profile',
    nama: 'Vicky Salim',
    npm: '2024240004'
  })
});

module.exports = router;
