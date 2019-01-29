var promotionsDA = require('./promotionsDA');

exports.createPromotions = function (req, res) {
    try {
        promotionsDA.createPromotions(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deletePromotions = function (req, res) {
    try {
        promotionsDA.deletePromotions(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getPromotions = function (req, res) {
    try {
        promotionsDA.getPromotions(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.editPromotions = function (req, res) {
    try {
        promotionsDA.editPromotions(req, res);
    } catch (error) {
        console.log(error);
    }
}



