var SuperCategory=require('../../model/superCategory.model')
var MainCategory=require('../../model/mainCategory.model')
var SubCategory=require('../../model/subCategory.model')

exports.subCategoryInsert = function (req, res) {

    let subCat = {
        subCategoryName: req.body.subCategoryName,
        subCategoryDescription: req.body.subCategoryDescription
    };

    SuperCategory.findById(req.body.categoryId, function (err, category) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var maincategory=category.mainCategory.id(req.body.mainCategoryId)
            res.status(200).json(maincategory);
     
        }
    });
}





