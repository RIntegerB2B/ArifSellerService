'use strict';
var inventoryHealthMgr = require('./inventoryHealth/inventoryHealthMgr');

module.exports = function (app) {
    app.route('/inventoryDetails')
    .get(inventoryHealthMgr.inventoryShow);
}