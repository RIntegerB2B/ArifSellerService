'use strict';
var catalogDA = require('./catalogDA');

exports.createCatalog = function (req, res) {
    try {
        catalogDA.createCatalog(req, res);
    } catch (error) {
        console.log(error);
    }
}




exports.getCatalog = function (req, res) {
    try {
        catalogDA.getCatalog(req, res);
    } catch (error) {
        console.log(error);
    }
}




exports.updateCatalog = function (req, res) {
    try {
        catalogDA.updateCatalog(req, res);
    } catch (error) {
        console.log(error);
    }
}


exports.deleteCatalog = function (req, res) {
    try {
        catalogDA.deleteCatalog(req, res);
    } catch (error) {
        console.log(error);
    }
}


exports.getCatalogById = function (req, res) {
    try {
        catalogDA.getCatalogById(req, res);
    } catch (error) {
        console.log(error);
    }
}
