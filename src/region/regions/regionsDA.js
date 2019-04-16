var Region = require('../../model/region.model');
var Customers = require('../../model/customerDetails.model');
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

exports.getSingleRegions = function (req, res) {
    Region.find({'_id':req.params.id}).select().exec(function (err, regions) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(regions);
        }
    });
}

exports.getCustomers = function (req, res) {
    Customers.find({'_id':req.params.id}).select().exec(function (err, regions) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(regions);
        }
    });
}