module.exports = function(app){

var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var express = require('express');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require('fs');

//sends form
app.post('/form', urlencodedParser, function(req, res, next){
  console.log(req.body);
  var mailer = {
    service: 'Go Daddy',
    host: 'smtpout.secureserver.net',
    port: 3535,
    secure: false,
    auth: {
      user: 'hiring@palski.com',
      pass: 'bigbrother',
    }
  };

  var mailOptions = {
    from: req.body.email,
    to: 'hiring@palski.com',
    subject: 'New applicant',
    text: req.body.message,
    attachments: [
    {
      filename: req.body.resume,
      content: 'resume',
      contentType: 'application/pdf'
    }
  ]
  };

  var transporter = nodemailer.createTransport(mailer);

  transporter.sendMail(mailOptions, function(error, success) {
    if (error){
      console.log(error);
    } else {
      console.log('Message was sent');
      res.render('position-success');
    }
  });

});
}
