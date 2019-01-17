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
    productData. price = req.body.price,
    productData.color = req.body.color,
    productData. styleCode = req.body.styleCode,
    productData. skuCode = req.body.skuCode,
    productData.primeImageName = req.body.primeImageName,
  
  
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
            const PATH = appSetting.productUploadPath + '/' + req.params.skucode;
            rmdir(PATH, function(err, paths) {
                if(err){
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
                            var arraylength =productData.length-1;
                                    for (var i= 0; i<=arraylength; i++)
                                    {
                                        productData[i].primeImageName = appSetting.productServerPath   +  productData[i].skuCode +  '/' + productData[i].primeImageName;
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
            var arraylength =productData.length-1;
                    for (var i= 0; i<=arraylength; i++)
                    {
                        productData[i].primeImageName = appSetting.productServerPath   +  productData[i].skuCode +  '/' + productData[i].primeImageName;
                    }
                    res.status(200).json(productData);
                    /* console.log(productData); */
        }
    });
}



exports.getProductById = function (req, res) {

    Product.findById(req.params.productId).select().exec(function (err, productDetails) {
        if (err) {
            res.status(500).json({
                "result": 0
            })
        } else {
            productDetails.primeImageName = appSetting.productServerPath   +  productDetails.skuCode +  '/' + productDetails.primeImageName;
            res.status(200).json(productDetails);

            
        }
    })
}