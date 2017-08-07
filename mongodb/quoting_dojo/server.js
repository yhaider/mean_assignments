var express = require("express");
var mongoose = require("mongoose");
var port = 8000;
var bodyparser = require("body-parser");
var app = new express();
// Setting up all the dependencies


app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/static"));
app.use(bodyparser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/quoting_dojo_db');
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    quote: {type: String, required: true, minlength: 5},
});
var Quote = mongoose.model('Quote', QuoteSchema);
mongoose.Promise = global.Promise;
// Setting up our dependencies and our schema/database for use



app.get("/", function(req, res){
    res.render('index');
});
// Simply renders the index template


app.post("/quotes", function(req, res){
    console.log(`Gathered information: ${req.body.name}, ${req.body.quote}`);
    console.log(`Adding ${req.body.name}'s quote to the database...`);
    var quote = new Quote();
    quote.name = req.body.name;
    quote.quote = req.body.quote;
    quote.save(function(err){
        if(err){
            console.log(`Unable to add to database. Check browser for errors.`);
            res.render('index', {title: 'you have errors!', errors: quote.errors});
        }
        else{
            console.log(`Success.`);
            res.redirect("/quotes");
        }
    });
});
// This is the POST route for '/quotes' and console logs each step
// It creates a new name/quote document and adds it to the database
// If there are errors, they will appear
// If not, it will redirect to '/quotes' but this time will take the
// GET route

app.get("/quotes", function(req, res){
    Quote.find({}, function(err, quotes){
        if(err){
            console.log(`Error occurred.`);
            res.redirect("/");
        }
        else{
            res.render('quotes', {quotes: quotes});
        }
    });
});
// This is the GET route for '/quotes/' and it gathers
// all the information from the database and renders the
// quotes and their contributors to the template for quotes

app.listen(port, function(){
    console.log(`Ready to go at port ${port}...`);
})
// Listening...
