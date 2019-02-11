'use strict';
var Inventory = require('../../model/inventory.model');
var Product = require('../../model/product.model');


exports.inventoryShow = function (req, res) {
    Product.aggregate([

        {
           $lookup:
           {
               "from": "inventories",
               "localField": "productId",
               "foreignField": "ID",
               "as": "joinedtable" 
            
           },
        },{
            $match: { "joinedtable": { $ne: [] } } 
        }
        ]).exec(function (err, inventories) { 
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                })
} else {
    var productLength = inventories.length - 1;
    for (var i = 0; i <= productLength; i++) {
        var productImages = inventories[i].productImageName.sort();
        var productImageLength = productImages.length - 1;
        for (var j = 0; j <= productImageLength; j++) {
            productData[i].productImageName[j] = appSetting.productServerPath + inventories[i].skuCode + '/' + inventories[i].productImageName[j];
        }
    }
    res.status(200).json(inventories);
}
        })
}