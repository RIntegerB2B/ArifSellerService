'use strict';
var Catalog = require('../../model/catalog.model');
var appSetting = require('../../config/appSetting');

exports.createProduct = function (req, res) {
    let product = {
        productName: req.body.productName,
        price: req.body.price,
        sizeDescription: req.body.sizeDescription,
        productTypeDesc: req.body.productTypeDesc,
        size: req.body.size,
        productDescription: req.body.productDescription,
        cod: req.body.cod,
        dispatchDesc: req.body.dispatchDesc,
        watsAppDesc: req.body.watsAppDesc,
        imageType: req.body.imageType,
        productImageName: req.body.productImageName
    };
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
                        res.status(200).json(catalogData.products[catalogData.products.length - 1]);
                    }
                });
            }
        }
    )
}



exports.updateProduct = function (req, res) {
    Catalog.findById(req.params.id, function (err, catalog) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var product = catalog.products.id(req.params.productId);
            product.productName = req.body.productName;
                product.price = req.body.price;
                product.sizeDescription = req.body.sizeDescription;
                product.productTypeDesc = req.body.productTypeDesc;
                product.size = req.body.size;
                product.productDescription = req.body.productDescription;
                product.cod = req.body.cod;
                product.dispatchDesc = req.body.dispatchDesc;
                product.watsAppDesc = req.body.watsAppDesc;
                product.imageType = req.body.imageType;
                product.productImageName = req.body.productImageName;
            catalog.save(function (err) {
                if (err) {
                    res.status(201).send({
                        "result": 0
                    });
                } else {
                    res.status(201).send({
                        "result": 1
                    });
                }
            });
        }
    });
}



exports.deleteProduct = function (req, res) {

    Catalog.findById(req.params.id, function (err, catalog) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            catalog.products.id(req.params.productId).remove();
            catalog.save(function (err) {
                if (err) {
                    res.status(201).send({
                        "result": 0
                    });
                } else {

                    Catalog.findById(req.params.id).select('products').exec(function (err, createdCatalog) {
                        if (err) {
                            res.status(500).json({
                                "result": 0
                            })
                        } else {
                            res.status(200).json(createdCatalog)
                        }
                    })

                }
            });

        }
    });

}

exports.getProduct = function (req, res) {

    Catalog.findById(req.params.id).select('products').exec(function (err, product) {
        if (err) {
            res.status(500).json({
                "result": 0
            })
        } else {
            var arraylength =product.products.length-1;
            for (var i= 0; i<=arraylength; i++)
            {
                product.products[i] .productImageName= appSetting.imageServerPath  + product.products[i] .productImageName;
            }
            res.status(200).json(product);
        }
    })
}



exports.getProductById = function (req, res) {

    Catalog.findById(req.params.id).select().exec(function (err, createdCatalog) {
        if (err) {
            res.status(500).json({
                "result": 0
            })
        } else {
            var product = createdCatalog.products.id(req.params.productId);
            

            if (product)
            product.productImageName = appSetting.imageServerPath + product.productImageName;
            /* res.status(200).json(createdCatalog) */
            res.status(200).json(product);

            
        }
    })
}