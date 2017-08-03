var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var app = express();
// Above are the variables needed to pull in
// express and session

app.use(session({secret:'code'}));
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', "ejs");
// This sets up our views and static, as well as session

app.get('/', function(request, response){
    if (request.session.times == null){
        request.session.times = 0;
    }
    else{
        request.session.times += 1;
    }
    response.render('counter', {times: request.session.times});
});
// This deals with the first time a user loads the page
// with the first "if" statement, and every other load uses
// the "else"

app.get('/addtwo', function(request,response){
    request.session.times += 1;
    response.redirect('/')
});
// We add only 1 to session since it redirects to "/"
// and there another 1 will be added, so to get 2,
// we only need to add 1 here


app.get('/reset', function(request,response){
    request.session.times = -1;
    response.redirect('/')
});
// While you can also .destroy() in this case,
// I set times to -1 since 1 will be added
// when it is redirected

app.listen(6789, function(){
    console.log('Listening on post number 6789...');
});
// This runs the server
