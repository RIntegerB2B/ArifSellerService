var accountRoutes = require('./account/accountRoute');
var categoryRoutes = require('./category/categoryRoute');

exports.loadRoutes = function (app) {
    accountRoutes(app);
    categoryRoutes(app);
};

