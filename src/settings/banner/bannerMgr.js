var bannersDA = require('./bannerDA');


exports.createBanners = function (req, res) {
    try {
        bannersDA.createBanners(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteBanners = function (req, res) {
    try {
        bannersDA.deleteBanners(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.getBanners = function (req, res) {
    try {
        bannersDA.getBanners(req, res);
    } catch (error) {
        console.log(error);
    }
}
