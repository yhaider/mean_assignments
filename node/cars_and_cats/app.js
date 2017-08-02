var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log('client require URL:', request.url);
    if (request.url === '/'){
        fs.readFile('views/index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars'){
        fs.readFile('views/cars.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/cars/new'){
        fs.readFile('views/cars_new.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/cats'){
        fs.readFile('views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        })
    }
    // The above if/else if statements allow us to bring up the html

    else if (request.url === '/stylesheets/general.css'){
        fs.readFile('stylesheets/general.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/css'});
            response.write(contents);
            response.end();
        })
    }
    // The above else if deals with the static

    else if (request.url === '/images/toyota-cars.png'){
        fs.readFile('images/toyota-cars.png', function(errors, contents){
            response.writeHead(200, {'Content-Type':'image/png'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/cats.png'){
        fs.readFile('images/cats.png', function(errors, contents){
            response.writeHead(200, {'Content-Type':'image/png'});
            response.write(contents);
            response.end();
        })
    }
    // The above deals with the images
    
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(7077);
console.log("Running in localhost at port 7077")
