const webpush = require('web-push');
var notificationDA = require('./notificationDA');
var USER_SUBSCRIPTIONS = new Array();

const vapidKeys = {
    "publicKey": "BIvwBoUek8ZLiE2HRr_srixb0Qi-Ql6CVBhhhvIuuZ5PMFYrfP0zSkNRrHD-uvIBhJ3_BDmzSFedMzu5ZuaVVRM",
    "privateKey": "WBd3Qq40-zxnCZYzSNhh8kY6dz9tIoRxS_K7wPnMaKc"
};


webpush.setVapidDetails(
    'mailto:rinteger@rinteger.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

exports.addPushSubscriber = function (req, res) {

    const sub = req.body;

    console.log('Received Subscription on the server: ', sub);

    USER_SUBSCRIPTIONS.push(sub);
    notificationDA.notificationSubscription(req, res);
}

exports.pushNotification = function (req, res) {

    

    notificationDA.pushNotification(req,res);
}