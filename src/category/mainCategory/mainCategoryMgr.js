var mainCategoryDA = require('../../category/mainCategory/mainCategoryDA')


exports.mainCategoryInsert = function (req, res) {
    mainCategoryDA.mainCategoryInsert(req, res)
}

exports.mainCategoryDelete = function (req, res) {
    mainCategoryDA.mainCategoryDelete(req, res)
}

exports.showSuperCategory = function (req, res) {
    mainCategoryDA.showSuperCategory(req, res)
}
