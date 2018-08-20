var viewRegisterMgr = require('./view-register/viewRegisterMgr');

        module.exports = function (app) {
                app.route('/buyer')
        .post(viewRegisterMgr.findRegistration);
        app.route('/buyer/:userType')
        .get(viewRegisterMgr.showUserTypeDetail);
        }
        