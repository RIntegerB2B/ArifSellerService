var accountRoutes = require('./account/accountRoute');
var categoryRoutes = require('./category/categoryRoute');
var productRoutes = require('./product/productRoute');
var buyerRoutes = require('./buyer/buyerRoute')

exports.loadRoutes = function (app) {
    accountRoutes(app);
    categoryRoutes(app);
    productRoutes(app);
    buyerRoutes(app);
};

