'use strict';
var superCategoryMgr = require('./superCategory/superCategoryMgr');
var mainCategoryMgr = require('./mainCategory/mainCategoryMgr');


module.exports = function (app) {

    app.route('/addCategory')
        .post(superCategoryMgr.superCategoryInsert);

    app.route('/category')
        .post(superCategoryMgr.superCategoryEdit);

    app.route('/categoryDelete')
        .delete(superCategoryMgr.superCategoryDelete);

    app.route('/mainCategory')
        .post(mainCategoryMgr.mainCategoryInsert);

    app.route('/category/:categoryId/mainCategory/:mainCategoryId')
        .delete(mainCategoryMgr.mainCategoryDelete);

    app.route('/superCategory')
        .get(mainCategoryMgr.showSuperCategory);



}