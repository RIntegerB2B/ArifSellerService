'use strict';

var catalogMgr = require('./catalog/catalogMgr');
var subProductMgr = require('./subProduct/subProductMgr');

module.exports = function (app) {
    app.route('/catalog')
        .post(catalogMgr.createCatalog);
  
    app.route('/catalog')
    .get(catalogMgr.getCatalog);

    app.route('/catalog/:id')
    .put(catalogMgr.updateCatalog);

    app.route('/catalog/:id')
    .delete(catalogMgr.deleteCatalog);

    app.route('/catalog/:id')
        .get(catalogMgr.getCatalogById); 
    
    app.route('/catalog/product')
        .post(subProductMgr.createCatalog);

    app.route('/catalog/:id/product/:productId')
    .put(subProductMgr.updateProduct);

    app.route('/catalog/:id/product/:productId')
    .delete(subProductMgr.deleteProduct);

    app.route('/catalog/:id/product')
    .get(subProductMgr.getProduct);

    app.route('/catalog/:id/product/:productId')
        .get(subProductMgr.getProductById); 
       
    
}