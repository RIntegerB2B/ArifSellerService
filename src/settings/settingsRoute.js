'use strict';
var adsMgr  = require('./ads/adsMgr');
var bannersMgr = require('./banner/bannerMgr');
var promotionsMgr = require('./promotions/promotionsMgr');
var regionMgr = require('./region/regionMgr');
var productMgr = require('./product/productMgr');

module.exports = function(app) {

    // ads 
    app.route('/ads')
    .post(adsMgr.createAds);

    app.route('/deleteads/:id')
    .get(adsMgr.deleteAds);

    app.route('/ads')
    .get(adsMgr.getAds);

    // banners

    app.route('/banners')
    .post(bannersMgr.createBanners);

    app.route('/deletebanners/:id')
    .get(bannersMgr.deleteBanners);

    app.route('/banners')
    .get(bannersMgr.getBanners);

    // promotions
    app.route('/promotions')
    .post(promotionsMgr.createPromotions);

    app.route('/deletepromotions/:id')
    .get(promotionsMgr.deletePromotions);

    app.route('/promotions')
    .get(promotionsMgr.getPromotions);

    app.route('/editpromotions/:id')
    .put(promotionsMgr.editPromotions);


     // region 

     app.route('/regions')
     .post(regionMgr.createRegion);

     app.route('/regions')
     .get(regionMgr.getRegions);

     app.route('/deleteregions/:id')
    .delete(regionMgr.deleteRegions);

    // product settings

    app.route('/productSettings')
     .get(productMgr.getProductSettings);

    app.route('/pricerange')
     .post(productMgr.createPriceRange);

     app.route('/removeprice')
     .post(productMgr.deletePriceRange);

     app.route('/color')
     .post(productMgr.createColor);

     app.route('/removecolor')
     .post(productMgr.deleteColor);
     app.route('/material')
     .post(productMgr.createMaterial);
     app.route('/removematerial')
     .post(productMgr.deleteMaterial);
}