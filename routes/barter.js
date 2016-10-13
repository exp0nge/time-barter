var express = require('express');
var router = express.Router();

/* LIST */
router.get('/', function(req, res, next) {
  res.send('barter');
});

/* CREATE */
router.post('/create', function(req, res, next) {
  res.send('barter');
});

/* RETRIEVE */
router.get('/:id', function(req, res, next) {
  res.send('barter');
});

/* UPDATE */
router.put('/update/:id', function(req, res, next) {
  res.send('barter');
});

/* DELETE */
router.delete('/delete/:id', function(req, res, next) {
  res.send('barter');
});


module.exports = router;
