var subCategoryDA = require('./subCategoryDA')


exports.subCategoryInsert = function (req, res) {
    subCategoryDA.subCategoryInsert(req, res)
}

exports.subCategoryDelete = function (req, res) {
    subCategoryDA.subCategoryDelete(req, res)
}


exports.subCategoryUpdate = function (req, res) {
    subCategoryDA.subCategoryUpdate(req, res)
}


exports.mainCategoryData = function (req, res) {
    subCategoryDA.mainCategoryData(req, res)
}


exports.mainCategoryOnSub = function (req, res) {
    subCategoryDA.mainCategoryOnSub(req, res)
}

exports.findSubCategory = function (req, res) {
    subCategoryDA.findSubCategory(req, res)
}