var mongoose = require('mongoose');

const ProductSchema  = new mongoose.Schema({
    productName: String,
    price: Number,
    shortDescription: String, //Free Size available
    productDescription: String,
    cod: String, // Cash on delivery avaible or not
    dispatchDesc: String, // Dispatched in 2-3 days
    watsAppDesc: String, // A complete detail about the product to share with contacts thru watsapp
    imageType: String,
    productImageName: String
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;