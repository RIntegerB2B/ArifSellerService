'use strict';
var signInMgr = require('./signIn/signInMgr');

var pwdChangeMgr = require('./pwdChange/pwdChangeMgr');

module.exports = function (app) {
    app.route('/admin')
        .post(signInMgr.create);

    app.route('/admin/validate')
        .post(signInMgr.signInToSite);
        
    app.route('/pwdChange/:emailId')

    //Get Call - http://localhost:3001/pwdChange/admin@gmail.com
        app.route('/pwdChange/:emailId')
        .get(pwdChangeMgr.pwdChangeRequest);
        
    // Post call in Postman - http://localhost:3001/pwdChange/reset
        //Below is the Json data u have to put in Postman Body
        // {
        //    "password": "NewPassword",
        //    "key" : "xyz"
        //}
    app.route('/pwdChange/reset')
        .post(pwdChangeMgr.pwdChangeReset);  
}