'use strict';
var Catalog = require('../../model/catalog.model');

exports.createCatalog = function (req, res) {
    var catalog  = new Catalog(req.body);
    catalog.save(function (err, createdCatalog) {
        if (err){
            res.status(500).json({
                "result": 0
            });
        }
        else{
            delete createdCatalog.image;
            res.status(200).json(createdCatalog);
        }
    });
};
