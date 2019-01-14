var mongoose = require('mongoose');

const PromotionSchema = new mongoose.Schema({
    position: String,
    productsID: [String],
    description: String


});
const Promotions = mongoose.model('promotions', PromotionSchema);
module.exports = Promotions;