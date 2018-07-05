var mongoose = require('mongoose');
var Product = require('./product.model');

const CatalogSchema  = new mongoose.Schema({
    catalogName: String,
    catalogType: String,
    material: String,
    capacity: String,
    catalogDescription: String,
    work: String,
    dispatch: String,
    image: Buffer,
    imageType: String,
    products: [Product]
});

const Catalog = mongoose.model('catalog', CatalogSchema);
module.exports = Catalog;