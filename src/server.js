var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    bodyParser = require('body-parser');
var cors = require('cors');
var exec = require('child_process').exec;
var fs = require('fs');
var http = require('http');
var https = require('https');
//var privateKey  = fs.readFileSync('./ssl-cer/ec2-13-126-16-163.ap-south-1.compute.amazonaws.com.key', 'utf8');
//var certificate = fs.readFileSync('./ssl-cer/ec2-13-126-16-163.ap-south-1.compute.amazonaws.com.crt', 'utf8');
var privateKey  = fs.readFileSync('/home/ubuntu/my-folder/app/service-seller/src/ssl-cer/ec2-13-126-16-163.ap-south-1.compute.amazonaws.com.key', 'utf8');
var certificate = fs.readFileSync('/home/ubuntu/my-folder/app/service-seller/src/ssl-cer/ec2-13-126-16-163.ap-south-1.compute.amazonaws.com.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var routes=require('./route');

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

app.use(cors());
routes.loadRoutes(app);
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(3001);
httpsServer.listen(3444);


var mongoDbConfig = require('./config/mongoDatabase.config');
var mongoose = require('mongoose');

mongoose.connect(mongoDbConfig.url, {});

mongoose.connection.on('error', function () {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function () {
    console.log("Successfully connected to the database");
})

app.get('/test', function (req, res) {
    res.send("Success!");
})

console.log('Seller Service started on: ' + port);
