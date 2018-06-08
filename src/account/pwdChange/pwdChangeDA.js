'use strict';
var ReqToAdmin=require('../../model/adminReqPwd.model');

exports.pwdChangeRequest = function (req, res, someFormattedDate) {
    ReqToAdmin.save({
            'randomKey': req.params.email,

            'validUntil': someFormattedDate
        },
        function (err) {
            if (err) {  // if it contains error return 0
                res.status(500).send({
                    message: "Some error occurred "
                });
            } else {
                res.json(1); // The update is success , return 1
            }
        });
};

exports.pwdChangeReset = function (req, res) {
    console.log('test');
};