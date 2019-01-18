'use strict';
var Product = require('../../model/product.model');
var appSetting = require('../../config/appSetting');
var fs = require('fs');
var rmdir = require('rmdir');
var mkdirp = require('mkdirp');

exports.createProduct = function (req, res) {
    var productData = new Product(req.body);
    productData.productTitle = req.body.productTitle,
        productData.productName = req.body.productName,
        productData.shortDescription = req.body.shortDescription,
        productData.productDescription = req.body.productDescription,
        productData.price = req.body.price,
        productData.color = req.body.color,
        productData.styleCode = req.body.styleCode,
        productData.skuCode = req.body.skuCode,
        productData.mainCategory.push(req.body.mainCategory) ,
        productData.save(
            function (err, productDetails) {
                if (err) { // if it contains error return 0
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    res.status(200).json(productDetails);
                }
            });

}

exports.createProductImage = function (req, file, res) {
    Product.findOne({
        'skuCode': req.params.skuCode,

    }, function (err, productDetail) {
        if (err) {
            console.log(err);

        } else {

            productDetail.productImageName.push(file.originalname);
                productDetail.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        /*  console.log(data); */
                    }
                })

        }
    });
}

exports.updateProduct = function (req, res) {
    Product.findById(req.params.productId, function (err, product) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            product.productName = req.body.productName;
            product.price = req.body.price;
            product.shortDescription = req.body.sizeDescription;
            product.productDescription = req.body.productDescription;
            product.productImageName = req.body.productImageName;
            product.save(function (err, updatedProduct) {
                if (err) {
                    res.status(201).send({
                        "result": 0
                    });
                } else {
                    res.status(201).json(updatedProduct);
                }
            });
        }
    });
}



exports.deleteProduct = function (req, res) {

    Product.findByIdAndRemove(req.params.productId, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            const PATH = appSetting.productUploadPath + '/' +  req.params.styleCode + '/' + req.params.skucode;
            rmdir(PATH, function (err, paths) {
                if (err) {
                    res.status(500).send({
                        err
                    });
                } else {
                    Product.find({}).select().exec(function (err, productData) {
                        if (err) {
                            res.status(500).send({
                                message: "Some error occurred while retrieving notes."
                            });
                        } else {
                            var productLength = productData.length - 1;
                            for (var i = 0; i <= productLength; i++) {
                                var productImages = productData[i].productImageName;
                                var productImageLength = productImages.length - 1;
                                for (var j = 0; j <= productImageLength; j++) {
                                    productData[i].productImageName[j] = appSetting.productServerPath + productData[i].styleCode + '/' + productData[i].skuCode + '/' + productData[i].productImageName[j];
                                }
                            }
                            res.status(200).json(productData);
                        }
                    });
                }
            });

        }
    });

}

exports.getProduct = function (req, res) {

    Product.find({}).select().exec(function (err, productData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            var productLength = productData.length - 1;
            for (var i = 0; i <= productLength; i++) {
                var productImages = productData[i].productImageName;
                var productImageLength = productImages.length - 1;
                for (var j = 0; j <= productImageLength; j++) {
                    productData[i].productImageName[j] = appSetting.productServerPath + productData[i].styleCode + '/' + productData[i].skuCode + '/' + productData[i].productImageName[j];
                }
            }
            res.status(200).json(productData);
        }
    });
}



exports.getProductById = function (req, res) {

    Product.find(
        {'_id':req.params.productId },function (err, productDetails) {
        if (err) {
            res.status(500).json({
                "result": 0
            })
        } else {
            var productDetailsLength =  productDetails[0].productImageName.length - 1;
            for(var i = 0 ; i <= productDetailsLength; i++){
                productDetails[0].productImageName[i] = appSetting.productServerPath + productDetails[0].styleCode + '/' +  productDetails[0].skuCode + '/' + productDetails[0].productImageName[i];
            }
            res.status(200).json(productDetails[0]);

        }
    })
}