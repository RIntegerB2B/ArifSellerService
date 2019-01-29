var Region = require('../../model/region.model');


exports.createRegion = function (req, res) {
    var region = new Region(req.body);
    region.save(function (err, regionData) {
      if (err) {
        res.status(500).send({
          "message": 'regions Not saved'
        });
        
      } else {
        Region.find({}).select().exec(function (err, regions) {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                });
            } else {
                res.status(200).json(regions);
            }
        });
      }
    });
}

exports.getRegions = function (req, res) {
    Region.find({}).select().exec(function (err, regions) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(regions);
        }
    });
}
exports.deleteRegions = function (req, res) {
    Region.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            Region.find({}).select().exec(function (err, region) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(region);
                }
            });
        }
    });
}