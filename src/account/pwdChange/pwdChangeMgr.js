'use strict';
var pwdChangeDA = require('../../account/pwdChange/pwdChangeDA');
var AdminAccount = require('../../model/adminAccount.model');
var nodemailer = require('nodemailer');

exports.pwdChangeResetPwd = function (req, res) {
  pwdChangeDA.pwdChangeResetPwd(req, res);
}

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
    to: req.params.emailId,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

exports.pwdChangeReset = function (req, res) {
  pwdChangeDA.pwdChangeReset(req, res)
  /* AdminAccount.findOne({ key: req.params.key }).select().exec(function(err, adminaccount) {
    if (err) throw err; // Throw err if cannot connect
    var key = req.params.key; // Save user's token from parameters to variable
    // Function to verify token
    jwt.verify(key, secret, function(err, res) {
      if (err) {
        res.json({ success: false, message: 'Password link has expired' }); // Token has expired or is invalid
      } else {
        if (!user) {
          res.json({ success: false, message: 'Password link has expired' }); // Token is valid but not no user has that token anymore
        } else {
          res.json({ success: true, adminaccount: adminaccount }); // Return user object to controller
        }
      }
    });
  }); */
};
