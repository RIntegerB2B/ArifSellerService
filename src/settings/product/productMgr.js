var productDA = require('./productDA');



exports.getProductSettings = function (req, res) {
    try {
        productDA.getProductSettings(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.createPriceRange = function (req, res) {
    try {
        productDA.createPriceRange(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deletePriceRange = function (req, res) {
    try {
        productDA.deletePriceRange(req, res);
    } catch (error) {
        console.log(error);
    }
}


exports.createColor = function (req, res) {
    try {
        productDA.createColor(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deleteColor = function (req, res) {
    try {
        productDA.deleteColor(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.createMaterial = function (req, res) {
    try {
        productDA.createMaterial(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deleteMaterial = function (req, res) {
    try {
        productDA.deleteMaterial(req, res);
    } catch (error) {
        console.log(error);
    }
}



