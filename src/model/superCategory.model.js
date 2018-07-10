var mongoose = require('mongoose');
var MainCategory=require('./mainCategory.model')

const SuperCategorySchema = new mongoose.Schema({
    
    categoryName: String,
    categoryDescription: String,
    mainCategory:[{
        mainCategoryName:String,
        mainCategoryDescription:String
    }]
    
});

const Category = mongoose.model('category', SuperCategorySchema);
module.exports = Category;




