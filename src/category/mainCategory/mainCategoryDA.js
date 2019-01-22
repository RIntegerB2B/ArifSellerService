'use strict';
var SuperCategory = require('../../model/superCategory.model');

exports.mainCategoryInsert = function (req, res) {
  let mainCat = {
    mainCategoryName: req.body.mainCategoryName,
    mainCategoryDescription: req.body.mainCategoryDescription
  };
  SuperCategory.findOneAndUpdate({
      _id: req.body._id
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

        SuperCategory.findById(req.body._id, function (err, superCat) {
          if (err) {
            res.status(500).send({
              "result": 0
            });
          } else {
            console.log(superCat.mainCategory);
          }
        });
      }
    }
  )
}



exports.mainCategoryDelete = function (req, res) {
  SuperCategory.findById(req.params.categoryId, function (err, category) {
    if (err) {
      res.status(500).send({
        "result": 0
      });
    } else {

      category.mainCategory.id(req.params.mainCategoryId).remove();
      category.save(function (err) {
        if (err) {
          res.status(201).send({
            "result": 0
          });
        } else {
          SuperCategory.findById(req.params.categoryId).select('mainCategory').exec(function (err, createdCatalog) {
            if (err) {
              res.status(500).json({
                "result": 0
              })
            } else {
              res.status(200).json(createdCatalog.mainCategory)
            }
          })
        }
      });

    }
  });
}




exports.mainCategoryUpdate = function (req, res) {
  SuperCategory.findById(req.params.categoryId, function (err, category) {
    if (err) {
      res.status(500).send({
        "result": 0
      });
    } else {
      var mainCat = category.mainCategory.id(req.params.mainCategoryId);
      mainCat.mainCategoryName = req.body.mainCategoryName;
      mainCat.mainCategoryDescription = req.body.mainCategoryDescription;
      category.save(function (err) {
        if (err) {
          res.status(201).send({
            "result": 0
          });
        } else {
          SuperCategory.findById(req.params.categoryId).select('mainCategory').exec(function (err, createdCatalog) {
            if (err) {
              res.status(500).json({
                "result": 0
              })
            } else {
              res.status(200).json(createdCatalog)
            }
          })
        }
      });
    }
  });
}



exports.getMainCategory = function (req, res) {
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


exports.getAllMainCategory = function (req, res) {
  var mainCategoryVal = [];
  SuperCategory.find({}).select('mainCategory').exec(function (err, superCat) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      var superCatLength = superCat.length - 1;
      for (var i = 0; i <= superCatLength; i++) {
        for (var j = 0; j <= superCat[i].mainCategory.length - 1; j++) {
          mainCategoryVal.push(superCat[i].mainCategory[j]);
        }
      }
      res.status(200).json(mainCategoryVal);
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
