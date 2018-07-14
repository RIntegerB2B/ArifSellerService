var mongoose = require('mongoose');

const ProductSchema  = new mongoose.Schema({
    productName: String,
    price: Number,
    sizeDescription: String, //Free Size available
    productTypeDesc: String,
    size: String, // (L*W) - 55cm * 44cm
    productDescription: String,
    cod: Boolean, // Cash on delivery avaible or not
    dispatchDesc: String, // Dispatched in 2-3 days
    watsAppDesc: String, // A complete detail about the product to share with contacts thru watsapp
    imageType: String
});

module.exports = ProductSchema;