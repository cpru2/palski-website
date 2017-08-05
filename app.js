var express = require('express');
var app = express();
var formController = require('./controllers/formcontroller');
var path = require('path');

//var mailer = require('./controllers/mailer');

//set up template engine
app.set('view engine', 'pug');
app.set('views', './views');

//serve files

app.use('/static', express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/position', function(req, res) {
  res.render('position');
});

app.get('/position-success', function(req, res) {
  res.render('position-success');
});

app.get('/updates', function(req, res) {
  res.render('updates');
});

app.get('/update', function(req, res) {
  res.render('update');
});

app.get('/careers', function(req, res) {
  res.render('careers');
});

//fire controllers
formController(app);


//listen to port
app.listen(3000);
