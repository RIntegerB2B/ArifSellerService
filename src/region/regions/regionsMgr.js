var regionsDA = require('./regionsDA');


exports.getRegions = function (req, res) {
    try {
        regionsDA.getRegions(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getSingleRegions = function (req, res) {
    try {
        regionsDA.getSingleRegions(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getCustomers = function (req, res) {
    try {
        regionsDA.getCustomers(req, res);
    } catch (error) {
        console.log(error);
    }
}
