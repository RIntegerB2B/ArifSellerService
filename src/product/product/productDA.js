'use strict';
var Product = require('../../model/product.model');
var appSetting = require('../../config/appSetting');

exports.createProduct = function (req, res) {
    var productData = new Product(req.body);
    
    productData.productName = req.body.productName,
    productData. price = req.body.price,
    productData.shortDescription = req.body.shortDescription,
    productData.productDescription = req.body.productDescription,
    productData.cod = req.body.cod,
    productData. dispatchDesc = req.body.dispatchDesc,
    productData. watsAppDesc = req.body.watsAppDesc,
    productData.imageType = req.body.imageType,
    productData.productImageName =req.body.productImageName
  
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
                product.cod = req.body.cod;
                product.dispatchDesc = req.body.dispatchDesc;
                product.watsAppDesc = req.body.watsAppDesc;
                product.imageType = req.body.imageType;
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
            Product.find({}).select().exec(function (err, productData) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(productData);
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
            res.status(200).json(productData);
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
            
            res.status(200).json(productDetails);

            
        }
    })
}