'use strict';
var SuperCategory = require('../../model/superCategory.model');

exports.mainCategoryInsert = function (req, res) {
    let mainCat = {
        mainCategoryName: req.body.mainCategoryName,
        mainCategoryDescription: req.body.mainCategoryDescription
    };
    SuperCategory.findOneAndUpdate({
            categoryName: req.body.categoryName
        }, {
            $push: {
                mainCategory: mainCat
            }
        },
        function (err, mainCatValue) {
            if (err) { // if it contains error return 0
                res.status(500).send({
                    "result": 0
                });
            } else {
                res.status(200).json(mainCat);
            }
        }
    )
}



exports.mainCategoryDelete = function (req, res) {

    SuperCategory.findById(req.body._id, function (err, findSup) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            SuperCategory.findOneAndRemove({
                'mainCategory._id': req.body.mainCategory
            }, function (err, findmain) {
                if (err) {
                    res.status(500).send({
                        "result": 1
                    });
                } else {

                    res.status(200).json(findmain);
                }
            });
        }
    });
}




exports.showSuperCategory = function (req, res) {
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