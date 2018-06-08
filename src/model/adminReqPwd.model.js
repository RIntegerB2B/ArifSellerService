var mongoose = require('mongoose');

const AdminForgotPwdSchema  = new mongoose.Schema({
    Key: String,
    ExpiryDate: Date
});

const AdminForgotPwd = mongoose.model('adminForgotPwd', AdminForgotPwdSchema);
module.exports = AdminForgotPwd;