var accountRoutes = require('./account/accountRoute');
var categoryRoutes = require('./category/categoryRoute');
var productRoutes = require('./product/productRoute');
var buyerRoutes = require('./buyer/buyerRoute');
var settingRoutes = require('./settings/settingsRoute');
var moqRoutes = require('./moq/moqRoute');
var inventoryRoutes = require('./inventory/inventoryRoute');
var regionRoutes = require('./region/regionRoute');

exports.loadRoutes = function (app) {
    accountRoutes(app);
    categoryRoutes(app);
    productRoutes(app);
    buyerRoutes(app);
    settingRoutes(app);
    moqRoutes(app);
    inventoryRoutes(app);
    regionRoutes(app);
};

