'use strict';
var pwdChangeDA = require('../../account/pwdChange/pwdChangeDA');
var nodemailer = require('nodemailer');

exports.pwdChangeRequest = function (req, res) {
  var currentDate = new Date();
  var numberOfDaysToAdd = 2;
  currentDate.setDate(currentDate.getDate() + numberOfDaysToAdd);
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var date = day + "/" + month + "/" + year

  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var someFormattedDate = day + "/" + month + "/" + year + " " + hours + ":" + minutes;
  pwdChangeDA.pwdChangeRequest(req, res, someFormattedDate);
  sendEmail();

};

var sendEmail = function () {
    let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'RIntegerNotification@gmail.com',
        pass: 'SellerApp@1'
    }
});
  
  var mailOptions = {
    from: 'RIntegerNotification@gmail.com',
    to: 'lancepreveen@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

exports.pwdChangeReset = function (req, res) {
  pwdChangeDA.pwdChangeReset(req, res);
};
