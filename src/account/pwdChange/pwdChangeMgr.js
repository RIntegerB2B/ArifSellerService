'use strict';
var ReqToAdmin = require('../../model/adminReqPwd.model');

exports.pwdChangeRequest = function (req, res,someFormattedDate) {
    ReqToAdmin.update({
        'randomKey':req.params.email,

        'validUntil':formattedData =function(req,res)
        {
            var currentDate = new Date();
 
var numberOfDaysToAdd = 2;
currentDate.setDate(currentDate.getDate() + numberOfDaysToAdd); 

var dd = currentDate.getDate();
var mm = currentDate.getMonth() + 1;
var y = currentDate.getFullYear();

var someFormattedDate = dd + '/'+ mm + '/'+ y;
     return validDate=someFormattedDate.toString();

        },
        function(err, affected, resp) 
{
          console.log(resp);
          res.send(affected);
        }

    })

};

