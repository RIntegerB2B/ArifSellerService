var regionDA = require('./regionDA');

exports.createRegion = function (req, res) {
    try {
        regionDA.createRegion(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getRegions = function (req, res) {
    try {
        regionDA.getRegions(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deleteRegions = function (req, res) {
    try {
        regionDA.deleteRegions(req, res);
    } catch (error) {
        console.log(error);
    }
}

