'use strict';
var notificationMgr = require('./notificationMgr');

module.exports = function (app) {
    app.route('/notification')
        .post(notificationMgr.addPushSubscriber);
        app.route('/bookingStatus')
        .get(notificationMgr.bookingStatus);
}