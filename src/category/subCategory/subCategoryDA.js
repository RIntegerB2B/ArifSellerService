var SuperCategory=require('../../model/superCategory.model')

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
            category.mainCategory.id(req.body.mainCategoryId);
            
                    $push: {
                        subCategory: subCat
                    }  
                   }
    });
}
 


exports.mainCategoryDetail = function (req, res) {
    SuperCategory.find({}).select('mainCategory.mainCategoryName').exec(function (err, superCat) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.json(superCat);
        }
    });
}
