var express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", __dirname + "/client/views");
app.use(express.static(__dirname + "/client/static"));
app.use(bodyparser.urlencoded({extended: true}));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function(){
    console.log(`Listening on port 8000...`);
})
