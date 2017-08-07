var express = require("express");
var port = 8000;
var bodyparser = require("body-parser");
var mongoose = require('mongoose');
var app = express();
// Above are all our variables that pull in
// express, body-parser, and now,
// Mongoose

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/static"));
app.use(bodyparser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
});
mongoose.model('User', UserSchema);
var User = mongoose.model('User');
mongoose.Promise = global.Promise;
// Above we set up  ejs functionality,
// using our views files and our static files, and allowing
// for post data
// We are also connecting our database here and
// setting this Schema in our Models as 'User'
// We are retrieving this Schema from our Models, named 'User'

app.get("/", function(req, res){
    res.render("index");
})
// Simply renders our form


app.post("/users", function(req, res){
    console.log(`Information submitted is... ${req.body}`);
    console.log(`Currently adding to database...`);
    var user = new User({name: req.body.name, age: req.body.age});
    user.save(function(error){
        if(error){
            console.log(`${req.body.name} could not be added to the database...try again?`);
        }
        else{
            console.log(`Successful addition of ${req.body.name} to the database.`)
            res.redirect("/");
        }
    });
})
// This adds a new user with the post information from the form
// It also redirects back to the main page and console logs what
// it is doing and whether the addition was successful


app.listen(port, function(){
    console.log(`Listening on port ${port}...`);
})
// Running the server...
