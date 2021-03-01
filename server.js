const express = require("express");
const http = require("http");
const path = require("path");


var app = express();
var server = http.Server(app);

app.set("port", 5050)
app.use("/", express.static(__dirname))
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
})

server.listen(5050, function(){
    console.log("Starting Server on port 5050")
})