var Banners = require('../../model/banners.model');

exports.createBanners = function (req, res) {
    var banners = new Banners(req.body);
    banners.save(function (err, ads) {
      if (err) {
        res.status(500).send({
          "message": 'banners Not created'
        });
        
      } else {
        res.status(200).json(ads);
      }
    });
}

exports.deleteBanners = function (req, res) {
    Banners.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            Banners.find({}).select().exec(function (err, bannerImages) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(bannerImages);
                }
            });
        }
    });
}

exports.getBanners = function (req, res) {
    Banners.find({}).select().sort({
        position: 1
    }).exec(function (err, bannerImages) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(bannerImages);
        }
    });
}