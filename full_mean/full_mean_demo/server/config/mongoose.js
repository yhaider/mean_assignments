var mongoose = require("mongoose");
var fs = require("fs");
var path = require("path");
mongoose.connect('mongodb://localhost/mean_demo');
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file);
    }
});
// Connecting our app to our database so we can
// store data! It will generate a new database with
// this name if it does not already exist
