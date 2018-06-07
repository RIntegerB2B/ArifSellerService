var accountRoutes = require('./account/accountRoute');

exports.loadRoutes = function (app) {
    accountRoutes(app);
};

