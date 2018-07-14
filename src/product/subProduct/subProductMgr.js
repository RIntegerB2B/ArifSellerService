'use strict';
var subProductDA = require('./subProductDA');


exports.createCatalog = function (req, res) {
    try {
        subProductDA.createCatalog(req, res);
    } 
    catch (error) {
        console.log(error);
    }
}