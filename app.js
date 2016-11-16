var express = require('express');                   // Loading in dependencies (AS)::
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();                                //Loading the express app (AS)

// view engine setup
app.set('views', path.join(__dirname, 'views'));    //Setting default views to the view directory (AS)
app.set('view engine', 'hjs');                      //Setting view engine to use hogan templates (AS)


app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//Use express as middleware to serve static files
//Serve up files that are in the public directory and use Express's static file handler to do so
app.use('/public', express.static("public"));

//Handlebars config
var exphbs = require('express3-handlebars');
const helpers = require('./common/helpers');
app.engine('handlebars',
    exphbs({
      defaultLayout: 'main',
      helpers: helpers
    }));

app.set('view engine', 'handlebars'); //Tell the app that the view engine property is also handlebars

app.use(require('./controllers/'));  // Sequelize routes

// Handle 404
 app.use(function(req, res) {
  res.status(404);
  res.render('404');
 });

 // Handle 500
 app.use(function(error, req, res, next) {
  console.log(error);
  res.status(500);
  res.render('500');
 });

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
