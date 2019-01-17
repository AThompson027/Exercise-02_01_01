var express = require('express');
var app = express();
var port = 8080;

app.get('/', function(req, res) {
    res.send("<h3>Hello, world!</h3>")
});

app.listen(port, function() {
    console.log("Server is listening on localhost:%s", port);
});