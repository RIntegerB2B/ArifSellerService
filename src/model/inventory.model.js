var mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    productId: String,
    ID: String,
    mfdQty: Number
});
const Inventory = mongoose.model('inventory', InventorySchema);
module.exports = Inventory;