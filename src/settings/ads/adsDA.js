var Ads = require('../../model/ads.model');

exports.createAds = function (req, res) {
    var ads = new Ads(req.body);
    ads.save(function (err, ads) {
      if (err) {
        res.status(500).send({
          "message": 'ads Not created'
        });
        
      } else {
        res.status(200).json(ads);
      }
    });
}

exports.deleteAds = function (req, res) {
    Ads.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            Ads.find({}).select().exec(function (err, adsImages) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(adsImages);
                }
            });
        }
    });
}

exports.getAds = function (req, res) {
    Ads.find({}).select().sort({
        position: 1
    }).exec(function (err, adsImages) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(adsImages);
        }
    });
}