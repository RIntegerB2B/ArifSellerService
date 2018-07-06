var mongoose = require('mongoose');


const SuperCategorySchema = new mongoose.Schema({
    
    categoryName: String,
    categoryDescription: String,
    mainCategory:[{
        mainCategoryName: String,
    mainCategoryDescription: String,
    subCategory:[{

        subCategoryyName: String,
        subCategoryDescription: String
    }]
    }]
    
});

const Category = mongoose.model('category', SuperCategorySchema);
module.exports = Category;




