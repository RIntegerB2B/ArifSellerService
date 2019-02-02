var mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productTitle: String,
    productName: String,
    productDescription: String,
    shortDescription: String,
    price: Number,
    color: String,
    styleCode: String,
    skuCode: String,
    productImageName: [String],
    mainCategory: String,
    region: [{
        regionName: String,
        regionPrice: Number,
        regionQuantity: Number
    }],

    // size
    length: Number,
    breadth: Number,
    height: Number,
    // details
    material: String,
    waterProof: String,
    laptopSize: String,
    closure: String,
    compartments: String,
    pockets: String,
});


const Product = mongoose.model('product', ProductSchema);
module.exports = Product;