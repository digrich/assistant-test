var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var bitcoin = require('./bitcoin-info');

var listeningPort = 9999;

var app = express();
var server = http.Server(app);

app.use(bodyParser.json());

app.all('/bitcoinInfo', function(req, res) {
    console.log("Request Received");
    bitcoin.bitcoinInfo(req, res);
});

app.get('/', function(req, res) {
    res.send('Hello World');
})

app.listen(listeningPort || 9999, function() {
    console.log("Server is up and listening to " + listeningPort);
});