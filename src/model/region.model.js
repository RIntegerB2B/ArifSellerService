var mongoose = require('mongoose');

const RegionSchema = new mongoose.Schema({
    regionName: String,
    currency: String
});
const Region = mongoose.model('region', RegionSchema);
module.exports = Region;