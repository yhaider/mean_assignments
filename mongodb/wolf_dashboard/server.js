// Please take a look at my wolf_modularized

var express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", __dirname + "/client/views");
app.use(express.static(__dirname + "/static"));
app.use(bodyparser.urlencoded({extended: true}));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(1111, function(){
    console.log(`Listening on port 1111...`);
})
