
var subCategoryDA=require('./subCategoryDA')


exports.subCategoryInsert = function (req, res) {
    subCategoryDA.subCategoryInsert(req, res)
}


exports.mainCategoryDetail = function (req, res) {
    subCategoryDA.mainCategoryDetail(req, res)
}