var express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", __dirname + "/client/views");
app.use(express.static(__dirname + "/client/static"));
app.use(bodyparser.urlencoded({extended: true}));
// All of the above sets up our dependencies

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);
// The above tells the application to use the routes in
// our routes.js file for the app, and to not look in
// here for routing


app.listen(8000, function(){
    console.log(`Listening on port 8000...`);
})
// Listening is a must!
