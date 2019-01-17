'use strict';
var superCategoryMgr = require('./superCategory/superCategoryMgr');
var mainCategoryMgr = require('./mainCategory/mainCategoryMgr');

module.exports = function (app) {
    // super category
    app.route('/addCategory')
        .post(superCategoryMgr.superCategoryInsert);

    app.route('/categoryDetails')
        .get(superCategoryMgr.superCategoryShow);

    app.route('/category/:id')
        .put(superCategoryMgr.superCategoryEdit);

    app.route('/categoryDelete/:categoryId')
        .delete(superCategoryMgr.superCategoryDelete);

    // main category
    app.route('/superCategory')
        .get(mainCategoryMgr.showSuperCategory);

    app.route('/mainCategory')
        .post(mainCategoryMgr.mainCategoryInsert);

     app.route('/category/:categoryId/mainCategory/:mainCategoryId')
        .put(mainCategoryMgr.mainCategoryUpdate);

    app.route('/category/:categoryId/mainCategory/:mainCategoryId')
        .delete(mainCategoryMgr.mainCategoryDelete);

    app.route('/superCategorydetail/:id')
        .get(mainCategoryMgr.getMainCategory);

        app.route('/showMainCategory')
        .get(mainCategoryMgr.getAllMainCategory)


}
