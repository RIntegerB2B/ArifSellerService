var SuperCategory=require('../../model/superCategory.model')
var MainCategory=require('../../model/mainCategory.model')
var SubCategory=require('../../model/subCategory.model')

exports.subCategoryInsert = function (req, res) {

    SuperCategory.findById(req.body.categoryId, function (err, category) {
       

             var mainCat=category.mainCategory.id(req.body.mainCategoryId)
            
            mainCat.subCategory.push({
                subCategoryName: req.body.subCategoryName,
        subCategoryDescription: req.body.subCategoryDescription
            })
             
            category.save(function(err,result){
                if (err) {
                    res.status(500).send({
                        "result":1
                    });
                }
                else{
                    res.status(500).json(result) 
                }
            });
            
        }
    );

}


exports.subCategoryDelete = function (req, res) {
    SuperCategory.findById(req.params.categoryId, function (err, category) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {

             var mainCat=category.mainCategory.id(req.params.mainCategoryId)
            mainCat.subCategory.id(req.params.subCategoryId).remove()
            category.save(function(err,result){
                if (err) {
                    res.status(500).send({
                        "result":1
                    });
                }
                else{
                    res.status(500).json(result) 
                }
            });
            
        }
    });

   
}

exports.subCategoryUpdate = function (req, res) {
    SuperCategory.findById(req.params.categoryId, function (err, category) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {

             var mainCat=category.mainCategory.id(req.params.mainCategoryId)
           var subCat= mainCat.subCategory.id(req.params.subCategoryId);
           subCat.subCategoryName=req.body.subCategoryName;
           subCat.subCategoryDescription=req.body.subCategoryDescription
            category.save(function(err,result){
                if (err) {
                    res.status(500).send({
                        "result":1
                    });
                }
                else{
                    res.status(500).json(result) 
                }
            });
            
        }
    });

   
}


exports.mainCategoryData = function (req, res) {
    SuperCategory.find({}).select('categoryName ').exec(function (err, superCat) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.json(superCat);
        }
    });
}


exports.mainCategoryOnSub = function (req, res) {
    SuperCategory.findById(req.params.id, function (err, category) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            res.status(200).json(category);
        }
    });
}

