'use strict';
var subProductDA = require('./subProductDA');


exports.createCatalog = function (req, res) {
    try {
        subProductDA.createCatalog(req, res);
    } catch (error) {
        console.log(error);
    }
}




exports.updateProduct = function (req, res) {
    try {
        subProductDA.updateProduct(req, res);
    } catch (error) {
        console.log(error);
    }
}


exports.deleteProduct = function (req, res) {
    try {
        subProductDA.deleteProduct(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.getProduct = function (req, res) {
    try {
        subProductDA.getProduct(req, res);
    } catch (error) {
        console.log(error);
    }
}



exports.getProductById = function (req, res) {
    try {
        subProductDA.getProductById(req, res);
    } catch (error) {
        console.log(error);
    }
}