var superCategoryDA = require('../../category/superCategory/superCategoryDA')


exports.superCategoryInsert = function (req, res) {
    superCategoryDA.superCategoryInsert(req, res)
}

exports.superCategoryEdit = function (req, res) {
    superCategoryDA.superCategoryEdit(req, res)
}

exports.superCategoryDelete = function (req, res) {
    superCategoryDA.superCategoryDelete(req, res)
}

exports.superCategoryShow= function (req, res) {
    superCategoryDA.superCategoryShow(req, res)
}