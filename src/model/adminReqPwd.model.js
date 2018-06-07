var mongoose = require('mongoose');

const AdminForgotPwdSchema  = new mongoose.Schema({
    randomKey: String,
    validUntil: Date
});

const ReqToAdmin = mongoose.model('reqToAdmin', AdminForgotPwdSchema);
module.exports = ReqToAdmin;