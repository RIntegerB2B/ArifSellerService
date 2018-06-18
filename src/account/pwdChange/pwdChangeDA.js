'use strict';
var AdminForgotPwd = require('../../model/adminReqPwd.model');
var AdminAccount = require('../../model/adminAccount.model');

exports.pwdChangeRequest = function (req, res, someFormattedDate) {
    var adminForgotPwdData = new AdminForgotPwd(req.body);
    adminForgotPwdData.Key = req.params.emailId;
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
    router.put('/savepassword', function(req, res) {
		AdminAccount.findOne({ username: req.body.username }).select('username password key').exec(function(err, adminaccount) {
			if (err) throw err; // Throw error if cannot connect
			if (req.body.password == null || req.body.password == '') {
				res.json({ success: false, message: 'Password not provided' });
			} else {
				adminaccount.password = req.body.password; // Save user's new password to the user object
				adminaccount.resettoken = false; // Clear user's resettoken 
				// Save user's new data
				adminaccount.save(function(err) {
					if (err) {
						res.json({ success: false, message: err });
					} else {
						res.json({ success: true, message: 'Password has been reset!' }); // Return success message
					}
				});
			}
		});
	});
};