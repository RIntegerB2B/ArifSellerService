'use strict';
var ReqToAdmin = require('../../model/adminReqPwd.model');

exports.pwdChangeRequest = function (req, res,someFormattedDate) {
    

    var currentDate = new Date();
  var numberOfDaysToAdd = 2;
currentDate.setDate(currentDate.getDate() + numberOfDaysToAdd);
      day = currentDate.getDate(),
      month = currentDate.getMonth() + 1,
      year = currentDate.getFullYear();
   var date=day + "/" + month + "/" + year

  var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();

	if (minutes < 10) {
	 minutes = "0" + minutes;
  }
  var someFormattedDate=day + "/" + month + "/" + year +" "+hours + ":" + minutes

};

