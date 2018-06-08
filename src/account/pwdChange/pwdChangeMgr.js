'use strict';
var ReqToAdmin = require('../../model/adminReqPwd.model');
var pwdchangeDA = require('../../account/pwdChange/pwdChangeDA');



exports.pwdChangeRequest = function (req, res, someFormattedDate) {
    var currentDate = new Date();
    var numberOfDaysToAdd = 2;
    currentDate.setDate(currentDate.getDate() + numberOfDaysToAdd);
    var   day = currentDate.getDate();
    var   month = currentDate.getMonth() + 1;
    var   year = currentDate.getFullYear();
    var date = day + "/" + month + "/" + year

    var currentTime = new Date();
    var   hours = currentTime.getHours();
    var   minutes = currentTime.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var someFormattedDate = day + "/" + month + "/" + year + " " + hours + ":" + minutes;
    pwdchangeDA.pwdChangeRequest(req, res, someFormattedDate);

    
};
