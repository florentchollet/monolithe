var http = require("http");
var express = require("express");

var port = "8080";

app = express();


app.use('/', express.static(__dirname));


app.listen(port);

console.log("Server running on port " + port);