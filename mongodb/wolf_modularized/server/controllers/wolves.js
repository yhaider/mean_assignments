var mongoose = require("mongoose");
var Wolf = mongoose.model('Wolf');

function Wolves(){
    this.index = function(req, res){
        Wolf.find({}, function(err, wolves){
            console.log(err);
            res.render('index', {wolves: wolves})
        });
    }
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
    this.new = function(req, res){
        res.render("new");
    }
    this.process_add = function(req, res){
        var wolf = new Wolf({name: req.body.name, status: req.body.status, age: req.body.age, gender: req.body.gender, color: req.body.color});
        wolf.save(function(err){
            console.log(err);
            res.redirect("/")
        });
    }
    this.edit = function(req, res){
        Wolf.findOne({_id: req.params.id}, function(err, result){
            if(err){
                console.log(err);
            }
            res.render("edit", {wolf: result});
        });
    }
    this.process_edit = function(req, res){
        Wolf.update({_id: req.params.id}, req.body, function(err, result){
            if(err){
                console.log(err);
            }
            res.redirect("/");
        });
    }
    this.process_destroy = function(req, res){
        Wolf.remove({_id: req.params.id}, function(err, result){
            if(err){
                console.log(err);
            }
            res.redirect("/")
        })
    }
}

var wolves = new Wolves();
module.exports = wolves;
