var mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
    position: String,
    bannerImage: String,
    bannerDescription: String
});
const Banners = mongoose.model('banners', BannerSchema);
module.exports = Banners;