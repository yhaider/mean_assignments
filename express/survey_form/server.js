var express = require("express");
var fs = require("fs");
var port = 8000;
var bodyparser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views" );
app.use(express.static(__dirname + "/static"));
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.render("index")
})

app.post("/results", function(req, res){
    res.render("results", {name: req.body.name, location: req.body.location, lang: req.body.lang, comment: req.body.comment})
})

app.listen(port, function(){
    console.log(`Listening on port ${port}...`)
})
