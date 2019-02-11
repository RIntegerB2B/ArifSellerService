var inventoryHealthDA = require('./inventoryHealthDA');

exports.inventoryShow = function (req, res) {
    try {
        inventoryHealthDA.inventoryShow(req, res);
    } catch (error) {
        console.log(error);
    }
}