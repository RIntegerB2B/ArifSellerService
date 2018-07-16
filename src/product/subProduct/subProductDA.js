'use strict';
var Catalog=require('../../model/catalog.model');


exports.createCatalog = function (req, res) {
  
        Catalog.findOneAndUpdate({
            _id: req.body._id
            }, {
                $push: {
                    products: product
                }
            },
            function (err, catalogValue) {
                if (err) { // if it contains error return 0
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    Catalog.findById(req.body._id, function (err, catalogData) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        res.status(200).json(catalogData.products[catalogData.products.length -1]);
                    }
                });
                }
            }
        )
    }
