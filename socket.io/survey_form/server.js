var express = require("express");
var fs = require("fs");
var port = 8000;
var bodyparser = require("body-parser");
var app = express();
// Above are the variables we define and
// app is used to create an instance of
// express to be used below


app.set("view engine", "ejs");
// This allows the server to read the ejs files
// in views folder
app.set("views", __dirname + "/views" );
// This makes it easier to pull information
// from the ejs files saved in views
app.use(express.static(__dirname + "/static"));
// Allows us to use the static files
app.use(bodyparser.urlencoded({extended: true}));
// Allows us to use POST requests


var server = app.listen(port, function(){
    console.log(`Listening on port ${port}...`)
});
// Actually running the server requires
// for the app to be listening on the port
// we defined earlier

var io = require('socket.io').listen(server)
	// Root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
	})
	// Listen to connection even from the client side
	io.sockets.on('connection', function (socket){
		//server listens to "post_form" event
	 	socket.on("post_form", function (data){
	 		// generate a random number
	 		var random_number = Math.floor((Math.random() * 1000) + 1);
		  //will emit the data to the client
		  socket.emit('update_message', {response: data});
			socket.emit('random_number', {response: random_number});
		})
	})
