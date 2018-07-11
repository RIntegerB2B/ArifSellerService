var mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
    subCategoryyName: String,
    subCategoryDescription: String
});

module.exports = SubCategorySchema;
