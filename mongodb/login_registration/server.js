var bodyparser = require("body-parser");
var session = require("express-session");
var port = 8000;
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/client/views");
app.use(express.static(__dirname + "/client/static"));
app.use(bodyparser.urlencoded({extended: true}));
app.use(session({secret:'somethingsecrethere'}));
// All of the above is what we have to do to
// use these modules within our app


require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);
// This portion tells our application to use our
// routes.js file as our routes rather than
// anything in this file

app.listen(port, function(){
    console.log(`Ready to go on port ${port}...`);
})
// We must use app.listen to see our app in development
// on our chosen port
