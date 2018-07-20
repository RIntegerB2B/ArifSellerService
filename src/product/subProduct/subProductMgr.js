'use strict';
var subProductDA = require('./subProductDA');
const multer = require('multer');

exports.createProduct = function (req, res) {
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
        subProductDA.createProduct(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.createProductImage = function (req, res) {
    try {
        const DIR = './uploads';

        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, DIR);
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
                return res.status(501).json({error:err});
            }
            //do all database record saving activity
            return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
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