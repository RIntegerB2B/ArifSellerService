'use strict';
var productDA = require('./productDA');
const multer = require('multer');
var fs = require('fs');
var mkdirp = require('mkdirp');
var appSetting = require('../../config/appSetting');

exports.createProduct = function (req, res) {
    try {
        productDA.createProduct(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.createProductImage = function (req, res) {
    try {
        const DIR = appSetting.productUploadPath;
        const PATH = DIR + '/' +  req.params.skucode;
mkdirp(PATH);
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            }
        });
        let upload = multer({
            storage: storage
        }).single('file');
        upload(req,res,function(err){
            if(err){
                 console.log(err);
            }
           /*  return res.json({originalname:req.file.originalname, uploadname:req.file.filename}); */
        });
       
    } catch (error) {
        console.log(error);
    }
}


exports.updateProduct = function (req, res) {
    try {
        const DIR = './uploads';
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, DIR);
            },
            filename: (req, file, cb) => {
                cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname);
            }
        });
        let upload = multer({
            storage: storage
        });
        productDA.updateProduct(req, res);
    } catch (error) {
        console.log(error);
    }
}


exports.deleteProduct = function (req, res) {
    try {
        productDA.deleteProduct(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.getProduct = function (req, res) {
    try {
        productDA.getProduct(req, res);
    } catch (error) {
        console.log(error);
    }
}



exports.getProductById = function (req, res) {
    try {
        productDA.getProductById(req, res);
    } catch (error) {
        console.log(error);
    }
}