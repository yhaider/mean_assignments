var express = require("express");
var app = express();
var bodyparser = require("body-parser");


app.use(bodyparser.json());

require('./server/config/mongoose.js');
// Connects the database

var routes_setter = require('./server/config/routes.js');
routes_setter(app);
// Uses the routes in routes.js under config

app.listen(1955, function(){
    console.log(`Ready to go on port 1955...`);
})
// Runs the server
