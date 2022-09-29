var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    nama: 'Raditya Putra'
  });

  router.get("/demo", function (req, res, next) {
    res.render('index', {
      title: 'Test',
      nama: 'Demo'
    });
  })
});

module.exports = router;