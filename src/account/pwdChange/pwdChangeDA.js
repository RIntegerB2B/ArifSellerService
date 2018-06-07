'use strict';
var ReqToAdmin = require('../../model/adminReqPwd.model');

exports.pwdChangeRequest = function (req, res) {
    ReqToAdmin.update({
        'randomKey':"xyz",

        'validUntil':formattedData =function(req,res)
        {
            var currentDate = new Date();
var numberOfDaysToAdd = 2;
currentDate.setDate(currentDate.getDate() + numberOfDaysToAdd); 

var dd = currentDate.getDate();
var mm = currentDate.getMonth() + 1;
var y = currentDate.getFullYear();

var someFormattedDate = dd + '/'+ mm + '/'+ y;
      return  someFormattedDate;     
        }
    })

};


