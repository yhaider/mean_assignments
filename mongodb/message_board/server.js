var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var connection = mongoose.connect("mongodb://localhost/message_board");
// Setting up our dependencies

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/static"));
app.use(bodyparser.urlencoded({extended: true}));
// Still setting up dependencies

var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    message: { type: String, required: true },
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });

var CommentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name: {type: String, required: true},
    comment: { type: String, required: true },
}, {timestamps: true });
// Setting up schemas for our Mongodb

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');
mongoose.Promise = global.Promise;
// Creating the models and naming them as variables
// for ease

app.get("/", function(req, res){
    Message.find({}).populate('_comments').exec(function(err, results){
        console.log(results);
        res.render('index.ejs', {messages: results});
	});
});

app.post("/post", function(req, res){
    var newMessage = new Message({name: req.body.name, message: req.body.message});
    	newMessage.save(function(err){
    		if(err){
                console.log("Message cannot be posted. See below for errors:")
    			console.log(err);
    			res.redirect("/")
    		} else {
    			console.log("Message posted.");
    			res.redirect('/');
    		}
    	})
});

app.post("/comment/:id", function(req, res){
	Message.findOne({_id: req.params.id}, function(err, message){
		var newComment = new Comment({name: req.body.name, comment: req.body.comment});
		newComment._message = message._id;
        console.log(message);
		Message.update({_id: req.params.id}, {$push: {_comments: newComment}}, function(err){
            if(err){
                console.log("Error occurred. See below:");
                console.log(err);
                res.redirect("/");
            }
		});
		newComment.save(function(err){
			if(err){
                console.log("Commenting unsuccessful. See below for errors:")
				console.log(err);
		        res.redirect("/");
			} else {
				console.log("Successfully commented");
				res.redirect("/");
			}
		});
	});
})

app.listen(8000, function(){
    console.log("Ready to go on port 8000...");
})
