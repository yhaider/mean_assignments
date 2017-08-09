var mongoose = require("mongoose");
var Name = mongoose.model('Name');

// Similar to 'views' in Django, here
// we show what happens at each route explicitly

function Names(){
    this.index = function(req, res){
        Name.find({}, function(err, names){
            if(err){
                console.error(err);
            }
            else{
                console.log("*~ Loaded All Successfully ~*");
            }
            res.json(names);
        });
    }
    this.add = function(req, res){
        var newname = req.params.name;
        Name.create({name: newname}, function(err){
            if(err){
                console.error(err);
            }
            else{
                console.log(`*~ Added ${req.params.name} Successfully ~*`);
            }
            return res.redirect('/');
        })
    }
    this.remove = function(req, res){
        Name.remove({name: req.params.name}, function(err){
            if(err){
                console.error(err);
            }
            else{
                console.log(`*~ Deleted ${req.params.name} Successfully ~*`);
            }
            res.redirect('/')
        });
    }
    this.show = function(req, res){
        Name.findOne({name: req.params.name}, function(err, result){
            if(err){
                console.error(err);
                return res.redirect('/')
            }
            else{
                console.log(`*~ Displayed ${req.params.name} Successfully ~*`);
                res.json(result);
            }
        })
    }
}

var names = new Names();
module.exports = names;
