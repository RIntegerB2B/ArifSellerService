var mongoose = require('mongoose');

const RegionSchema = new mongoose.Schema({
    regionName: String,
    currency: String,
    domainRegion: String
});
const Region = mongoose.model('region', RegionSchema);
module.exports = Region;