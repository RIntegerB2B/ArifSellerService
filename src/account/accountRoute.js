'use strict';
var signInMgr = require('./signIn/signInMgr');
var pwdChangeMgr = require('./pwdChange/pwdChangeMgr');
module.exports = function (app) {
    app.route('/admin')
        .post(signInMgr.create);

    app.route('/admin/validate')
        .post(signInMgr.signInToSite);

    app.route('/pwdChange/:emailId')
        .get(pwdChangeMgr.pwdChangeRequest);

    app.route('/pwdChange/reset/:key/:pwd')
        .get(pwdChangeMgr.pwdChangeReset);  

        // Post call in Postman - http://localhost:3001/pwdChange/reset
        //Below is the Json data u have to put in Postman Body
        // {
        //    "password": "NewPassword"
        //}
    app.route('/pwdChange/reset')
        .post(pwdChangeMgr.pwdChangeResetPwd);  
}