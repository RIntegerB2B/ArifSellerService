'use strict';
var superCategoryMgr = require('./superCategory/superCategoryMgr');
var mainCategoryMgr = require('./mainCategory/mainCategoryMgr');
var subCategoryMgr = require('./subCategory/subCategoryMgr')

module.exports = function (app) {

    app.route('/addCategory')
        .post(superCategoryMgr.superCategoryInsert);

    app.route('/categoryDetails')
        .get(superCategoryMgr.superCategoryShow);

    app.route('/superCategory')
        .get(mainCategoryMgr.showSuperCategory);

    app.route('/category')
        .post(superCategoryMgr.superCategoryEdit);

    app.route('/categoryDelete/:categoryId')
        .delete(superCategoryMgr.superCategoryDelete);

    app.route('/mainCategoryDetails')
        .get(mainCategoryMgr.mainCategoryShow);

    app.route('/mainCategory')
        .post(mainCategoryMgr.mainCategoryInsert);

    app.route('/category/:categoryId/mainCategory/:mainCategoryId')
        .delete(mainCategoryMgr.mainCategoryDelete);

    app.route('/category/:categoryId/mainCategory/:mainCategoryId')
        .put(mainCategoryMgr.mainCategoryUpdate);

 app.route('/mainCategoryDetails')
        .get(mainCategoryMgr.mainCategoryShow);

    app.route('/subCategory')
        .post(subCategoryMgr.subCategoryInsert);

    app.route('/mainCategoryData')
        .get(subCategoryMgr.mainCategoryDetail);

     app.route('/superCategorydetail/:id')
        .get(mainCategoryMgr.getMainCategory);

    app.route('/categoryData/:id')
        .get(mainCategoryMgr.getCategory);

        app.route('/mainCategory/:mainCategoryId')
        .get(subCategoryMgr.subCategoryDelete);

}