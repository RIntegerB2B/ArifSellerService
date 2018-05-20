'use strict';
var signInMgr = require('./signIn/signInMgr');
module.exports = function (app) {
    app.route('/admin')
        .post(signInMgr.create);

    app.route('/admin/validate')
        .post(signInMgr.signInToSite);
}