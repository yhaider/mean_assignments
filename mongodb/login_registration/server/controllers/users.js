var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
var User = mongoose.model('User');

function Users(){
    this.index = function(req, res){
        req.session.destroy();
        res.render('index');
    }

    this.add = function(req, res){
        User.find({email:req.body.email},function(err,users){
            if(users.length > 0){
                res.render("index",{regErrs:["A user with this email already exists."]});
            }
            else{
                let user = new User(req.body);
                user.save(function(errs){
                    if(errs){
                        res.render("index",{registration_errs:user.errors})
                    }
                    else{
                        req.session.name = user.first_name;
                        res.redirect("/home");
                    }
                });
            }
        })
    }
    this.home = function(req, res){
        if(!req.session.name){
            res.redirect("/");
        }
        else{
            res.render('home', {name: req.session.name});
        }
    }

    this.logout = function(req, res){
        req.session.destroy();
        console.log('Logging out...')
        res.redirect('/');
    }

    this.login = function(req, res){
        let errs = [];

        if(req.body.email == undefined){
            errs.push("Email cannot be blank.");
        }
        if(req.body.password == undefined){
            errs.push("Password cannot be blank.");
        }

        if(errs.length > 0){
            res.render("index",{login_errs:errs});
        }

        User.find({email:req.body.email},function(err,user){
            if(user.length > 0){
                user = user[0];

                if(!User.schema.methods.match(req.body.password,user.password)){
                    res.render("index",{login_errs:["Invalid Credentials."]});
                }
                else{
                    req.session.name = user.first_name;
                    res.redirect("/dashboard");
                };
            }
            else{
                res.render("index",{login_errs:["User Not Found."]});
            }
        });
    }
}
var users = new Users();
module.exports = users;
