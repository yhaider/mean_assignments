var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var connection = mongoose.connect("mongodb://localhost/wolf_pack");


app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/static"));
app.use(bodyparser.urlencoded({extended: true}));

var WolfSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    status: {type: String, required: true, minlength: 2},
    age: {type: Number, required: true, maxlength: 2},
    gender: {type: String, required: true, minlength: 4},
    color: {type: String, required: true, minlength: 3},
});
var Wolf = mongoose.model('Wolf', WolfSchema);



app.get('/', function(req, res){
    Wolf.find({}, function(err, result){
        console.log(err);
        res.render("index", {wolves: result});
    });
});
// Display the dashboard of all wolves

app.get('/new', function(req, res){
    res.render("new");
});
// Form to add a new wolf


app.get('/:id', function(req, res){
    Wolf.find({ _id: req.params.id}, function(err, result){
        if (err){
            console.log(err);
        }
        res.render("id_sheet", {wolf: result[0]});
    });
});
// Show an individual wolf's attributes


app.post('/wolves', function(req, res){
    var wolf = new Wolf({name: req.body.name, status: req.body.status, age: req.body.age, gender: req.body.gender, color: req.body.color});
    wolf.save(function(err){
        console.log(err);
        res.redirect("/")
    });
});
// Adds new wolf to database

app.get('/edit/:id', function(req, res){
    Wolf.find({ _id: req.params.id}, function(err, result){
        if(err){
            console.log(err);
        }
        res.render("edit", {wolf: result[0]});
    });
});
// Form to edit a wolf's information

app.post('/update/:id', function(req, res){
    Wolf.update({ _id: req.params.id}, req.body, function(err, result){
        if(err){
            console.log(err);
        }
        res.redirect("/");
    });
});
// Edits wolf's information in database

app.post('/destroy/:id', function(req, res){
    Wolf.remove({ _id: req.params.id}, function(req, res){
        res.redirect("/")
    })
});
// Removes the wolf with the corresponding
// ID from the base

app.listen(8000, function(){
    console.log(`Ready to go on port 8000...`);
})
