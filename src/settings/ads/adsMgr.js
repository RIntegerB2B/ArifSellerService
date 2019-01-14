var adsDA = require('./adsDA');


exports.createAds = function (req, res) {
    try {
        adsDA.createAds(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteAds = function (req, res) {
    try {
        adsDA.deleteAds(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.getAds = function (req, res) {
    try {
        adsDA.getAds(req, res);
    } catch (error) {
        console.log(error);
    }
}
