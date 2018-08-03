'use strict';
var Notification = require('../model/notification.model');
const webpush = require('web-push');

exports.notificationSubscription = function (req, res) {
    var notification = new Notification();
    notification.subscription=req.body;
    notification.save(function (err, notfn) {
        if (err) {
            res.status(500).send(err);
            console.log(err);
        } else {
            res.status(200).json({
                message: "Subscription added successfully."
            });
            console.log(notfn);
        }
    });
};

exports.pushNotification = function (req, res) {

    Notification.findOne({
        '_id': req.params.id
    }, function (err, subscriptionData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            console.log('Total subscriptions', subscriptionData);

            const notificationPayload = {
                "notification": {
                    "title": "Notification fromRipsil",
                    "body": "Photo Shoot Completed!",
                    "icon": "assets/main-page-logo-small-hat.png",
                    "vibrate": [100, 50, 100],
                    "data": {
                        "dateOfArrival": Date.now(),
                        "primaryKey": 1
                    }
                }
            };
            var allSubscriptions= [];
            allSubscriptions.push(subscriptionData.subscription);
            Promise.all(allSubscriptions.map(sub => webpush.sendNotification(
                    sub, JSON.stringify(notificationPayload))))
                .then(() => res.status(200).json({
                    message: 'Newsletter sent successfully.'
                }))
                .catch(err => {
                    console.error("Error sending notification, reason: ", err);
                    res.sendStatus(500);
                });
        }
    });




};