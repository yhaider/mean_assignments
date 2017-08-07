var express = require("express");
var session = require("express-session");
var port = 1234;
var bodyparser = require("body-parser");
var app = express();
// Above are all our variables that pull in
// express, session, and body-parser

app.use(session({secret: "code"}));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/static"));
app.use(bodyparser.urlencoded({extended: true}));
// Above we set up session functionality, ejs functionality,
// using our views files and our static files, and allowing
// for post data

app.get("/", function(req, res){
    if (!req.session.number){
        req.session.number = Math.floor(Math.random()*100+1);
    }
    if (!req.session.status){
        req.session.status = ' ';
    }
    console.log(`The number I am thinking of is ${req.session.number}...`)
    res.render("index", {guess: req.session.status});
});
// Above is our main route. If it is the first time
// on the page, the "if" statements deal with
// setting a number for the user to guess
// We pass in the status which will be updated
// when the user guesses


app.post("/process", function(req, res){
    if (req.body.guess < req.session.number){
        req.session.status = "low";
    }
    else if (req.body.guess > req.session.number){
        req.session.status = "high";
    }
    else{
        req.session.status = "correct";
    }
    console.log(`Guess: ${req.body.guess} || Status: ${req.session.status}`)
    res.redirect("/")
});
// Above is where we compare the guess to the number
// stored as the guess
// The status determines what message appears to the user
// and that logic can be seen in views/index.ejs


app.get("/reset", function(req, res){
    req.session.destroy();
    res.redirect("/")
})
// This just destroys everything in session to
// allow us to reset

app.listen(port, function(){
    console.log(`Listening on port ${port}...`)
});
// This actually runs the server
