var express = require('express');
var router = express.Router();

/* LIST */
router.get('/', function(req, res, next) {
  res.send('TODO');
});

/* CREATE */
router.post('/create', function(req, res, next) {
  res.send('TODO');
});

/* RETRIEVE */
router.get('/:id', function(req, res, next) {
  res.send('TODO');
});

/* UPDATE */
router.put('/update/:id', function(req, res, next) {
  res.send('TODO');
});

/* DELETE */
router.delete('/delete/:id', function(req, res, next) {
  res.send('TODO');
});


module.exports = router;
