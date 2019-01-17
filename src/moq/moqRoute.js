var moqMgr = require('./moqMgr');
module.exports = function (app) {
    app.route('/createMoq')
        .post(moqMgr.createMoq);

        app.route('/moqs')
        .get(moqMgr.viewMoq);

        app.route('/addMoq/:moqid/product/:productid')
        .get(moqMgr.addProducts);
}
