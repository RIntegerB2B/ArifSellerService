'use strict';
var regionsMgr  = require('./regions/regionsMgr');

module.exports = function (app) {
    app.route('/regionsdetails')
        .get(regionsMgr.getRegions);

        app.route('/regions/:id')
        .get(regionsMgr.getSingleRegions);

        app.route('/customers/:id')
        .get(regionsMgr.getCustomers);

}