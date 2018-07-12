'use strict';
var catalogDA = require('./catalogDA');

exports.createCatalog = function (req, res) {
    try {
      catalogDA.createCatalog(req, res);
    } 
    catch (error) {
        console.log(error);
    }
}