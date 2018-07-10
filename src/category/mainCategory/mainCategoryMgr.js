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

exports.mainCategoryUpdate = function (req, res) {
    mainCategoryDA.mainCategoryUpdate(req, res)
}

exports.mainCategoryShow = function (req, res) {
    mainCategoryDA.mainCategoryShow(req, res)
}

/* exports.mainCategoryShow = function (req, res) {
    mainCategoryDA.mainCategoryShow(req, res)
} */

exports.getMainCategory = function (req, res) {
    mainCategoryDA.getMainCategory(req, res)
}



exports.getCategory = function (req, res) {
    mainCategoryDA.getCategory(req, res)
}
