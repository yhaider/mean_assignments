var express = require("express");
var app = express();
var bodyparser = require("body-parser");

// app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(1955, function(){
    console.log(`Ready to go on port 1955...`);
})
