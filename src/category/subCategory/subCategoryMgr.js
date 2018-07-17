var subCategoryDA = require('./subCategoryDA')


exports.subCategoryInsert = function (req, res) {
    try {
        subCategoryDA.subCategoryInsert(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.subCategoryDelete = function (req, res) {
    try {
        subCategoryDA.subCategoryDelete(req, res);
    } catch (error) {
        console.log(error);
    }
}


exports.subCategoryUpdate = function (req, res) {
    try {
        subCategoryDA.subCategoryUpdate(req, res);
    } catch (error) {
        console.log(error);
    }
}


exports.mainCategoryData = function (req, res) {
    try {
        subCategoryDA.mainCategoryData(req, res);
    } catch (error) {
        console.log(error);
    }
}


exports.mainCategoryOnSub = function (req, res) {
    try {
        subCategoryDA.mainCategoryOnSub(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.findSubCategory = function (req, res) {
    try {
        subCategoryDA.findSubCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}