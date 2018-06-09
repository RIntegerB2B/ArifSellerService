'use strict';
var AdminForgotPwd = require('../../model/adminReqPwd.model');
var AdminAccount = require('../../model/adminAccount.model');

exports.pwdChangeRequest = function (req, res, someFormattedDate) {
    var adminForgotPwdData = new AdminForgotPwd(req.body);
    adminForgotPwdData.Key = req.params.email;
    adminForgotPwdData.ExpiryDate = someFormattedDate; // In Progress
    adminForgotPwdData.save(
        function (err) {
            if (err) { // if it contains error return 0
                res.status(500).send({
                    message: "Some error occurred "
                });
            } else {
                res.json(1); // The update is success , return 1
            }
        });
};

exports.pwdChangeReset = function (req, res) {
    // Update Pwd and isActive in adminaccount collection
    AdminAccount.update({
            password: req.body.password
        }),
        function (err, affected, res) {
            console.log(res);
            res.send(affected);
        }
    console.log('test');
};