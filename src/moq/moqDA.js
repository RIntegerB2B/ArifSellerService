var MOQ = require('../model/moq.model');

exports.createMoq = function (req, res) {
  var moq = new MOQ(req.body);
  moq.save(function (err, moq) {
    if (err) {
      res.status(500).send({
        "message": 'moq not created'
      });

    } else {
      res.status(200).json(moq);
    }
  });
}

exports.viewMoq = function (req, res) {
  MOQ.find({}).select().exec(function (err, moq) {
    if (err) {
      res.status(500).send({
        "message": "error while retreiving moq"
      })
    } else {
      res.status(200).json(moq);
    }
  })
}

exports.addProducts = function (req, res) {
  MOQ.findOne({
    '_id': req.params.moqid
  }, function (err, moqEdit) {
    if (err) {
      res.status(500).json(err);
    } else {
      moqEdit.products.push(req.params.productid);
      moqEdit.save(function (err, moqData) {
        if (err) {
          res.status(500).send({
            "message": "error while retreiving moq"
          })
        } else {
          res.status(200).json(moqData);
        }
      })
    }
  })
}