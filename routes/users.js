var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Using Passport to authenticate users
/* TESTING THIS OUT*/

app.post('/login',
  passport.authenticate('local'),       //If this fails, Passport will respond with a 401 Unauthorized status 
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);

  });
/* TESTING THIS OUT*/


module.exports = router;
