var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var app = express();

app.use(session({secret:'code'}));
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', "ejs");

app.get('/', function(request, response){
    if (request.session.times == null){
        request.session.times = 0;
    }
    else{
        request.session.times += 1;
    }
    response.render('counter', {times: request.session.times});
});

app.get('/addtwo', function(request,response){
    request.session.times += 1;
    response.redirect('/')
});

app.get('/reset', function(request,response){
    request.session.times = -1;
    response.redirect('/')
});

app.listen(6789, function(){
    console.log('Listening on post number 6789...');
});
