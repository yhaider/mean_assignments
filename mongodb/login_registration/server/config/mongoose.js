var mongoose = require("mongoose");
var fs = require("fs");
var path = require("path");
mongoose.connect('mongodb://localhost/login_registration');
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file);
    }
});

// This section connects our program to our database
// If that database does not exist, it will create it
