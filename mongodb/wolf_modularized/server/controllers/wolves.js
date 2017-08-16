var mongoose = require("mongoose");
var Wolf = mongoose.model('Wolf');

function Wolves(){
    this.index = function(req, res){
        Wolf.find({}, function(err, wolves){
            console.log(err);
            res.render('index', {wolves: wolves})
        });
    }
    // This displays the index page with all wolves listed


    this.identify = function(req, res){
        var id = req.params.id;
        Wolf.findOne({_id: id}, function(err, result){
            if (err){
                console.log(err);
            }
            console.log(result)
            res.render("id_sheet", {wolf: result});
        });
    }
    // This uses the id in the root parameter to pull out
    // more detailed information on one wolf in the pack
    // and then display it on a new template

    this.new = function(req, res){
        res.render("new");
    }
    // This is just rendering the form to add a new wolf

    this.process_add = function(req, res){
        var wolf = new Wolf({name: req.body.name, status: req.body.status, age: req.body.age, gender: req.body.gender, color: req.body.color});
        wolf.save(function(err){
            console.log(err);
            res.redirect("/")
        });
    }
    // This is where the wolf gets added to the database and
    // the pack. If errors occur, they will be logged in our
    // console, and regardless, the user will be redirected
    // to the root route, where they can see their new addition
    // in the table

    this.edit = function(req, res){
        Wolf.findOne({_id: req.params.id}, function(err, result){
            if(err){
                console.log(err);
            }
            res.render("edit", {wolf: result});
        });
    }
    // This renders a new editing form that populates the form with
    // the currently stored information of the specific wolf for editing.
    // The wolf's current information is pulled using the root parameter id

    this.process_edit = function(req, res){
        Wolf.update({_id: req.params.id}, req.body, function(err, result){
            if(err){
                console.log(err);
            }
            res.redirect("/");
        });
    }
    // This processes the changes made to the wolf (provided they still
    // meet validation requirements) and redirect the user to the main page

    this.process_destroy = function(req, res){
        Wolf.remove({_id: req.params.id}, function(err, result){
            if(err){
                console.log(err);
            }
            res.redirect("/")
        })
    }
    // This deletes a specific wolf from the database by pulling its
    // unique ID from the route and removing the wolf from the database
    // with the matching id.
}

var wolves = new Wolves();
module.exports = wolves;
