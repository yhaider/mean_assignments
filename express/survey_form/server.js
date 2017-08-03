var express = require("express");
var fs = require("fs");
var port = 8000;
var bodyparser = require("body-parser");
var app = express();
// Above are the variables we define and
// app is used to create an instance of
// express to be used below


app.set("view engine", "ejs");
// This allows the server to read the ejs files
// in views folder
app.set("views", __dirname + "/views" );
// This makes it easier to pull information
// from the ejs files saved in views
app.use(express.static(__dirname + "/static"));
// Allows us to use the static files
app.use(bodyparser.urlencoded({extended: true}));
// Allows us to use POST requests


app.get("/", function(req,res){
    res.render("index")
})
// This is our index page, just rendering
// the template with the form

app.post("/results", function(req, res){
    res.render("results", {name: req.body.name, location: req.body.location, lang: req.body.lang, comment: req.body.comment})
})
//This is our POST which collects the information
// from the form via "req.body" which is a dictionary
// containing the information to then insert into
// our results template

app.listen(port, function(){
    console.log(`Listening on port ${port}...`)
})
// Actually running the server requires
// for the app to be listening on the port
// we defined earlier
