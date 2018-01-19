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
    host: 'xxx.xxx.net',
    port: ####,
    secure: false,
    auth: {
      user: 'example@example.com',
      pass: 'sadjasdjkash',
    }
  };

  var mailOptions = {
    from: req.body.email,
    to: 'example@example.com',
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
