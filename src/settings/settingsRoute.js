'use strict';
var adsMgr  = require('./ads/adsMgr');
var bannersMgr = require('./banner/bannerMgr');
var promotionsMgr = require('./promotions/promotionsMgr');

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

}