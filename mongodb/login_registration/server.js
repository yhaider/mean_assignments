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

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, function(){
    console.log(`Ready to go on port ${port}...`);
})
