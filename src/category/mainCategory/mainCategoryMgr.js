var mainCategoryDA = require('../../category/mainCategory/mainCategoryDA')


exports.mainCategoryInsert = function (req, res) {
    try {
        mainCategoryDA.mainCategoryInsert(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.mainCategoryDelete = function (req, res) {
    try {
        mainCategoryDA.mainCategoryDelete(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.showSuperCategory = function (req, res) {
    try {
        mainCategoryDA.showSuperCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.mainCategoryUpdate = function (req, res) {
    try {
        mainCategoryDA.mainCategoryUpdate(req, res);
    } catch (error) {
        console.log(error);
    }
}


exports.getMainCategory = function (req, res) {
    try {
        mainCategoryDA.getMainCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.getAllMainCategory = function (req, res) {
    try {
        mainCategoryDA.getAllMainCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}


