const express = require("express");
const http = require("http");
const path = require("path");


var app = express();
var server = http.Server(app);

app.set("port", 5055)
app.use("/", express.static(__dirname))
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
})

server.listen(5055, function(){
    console.log("Starting Server on port 5055")
})