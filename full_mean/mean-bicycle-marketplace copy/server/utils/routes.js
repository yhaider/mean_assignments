const users = require('./../controllers/users.js');
// This enables the user.js file so we
// can refer to methods in the file

const bikes = require('./../controllers/bikes.js');
// This enables the bikes.js file so we
// can refer to methods in the file

const path = require('path');

module.exports = function (app) {
	//Set up routes
	// Index route
	app.get('/api/users', users.index);
	// This is a get request and it
	// is used to talk to our backend
	// database to grab all users

	app.post('/api/bikes', bikes.create);
	// This is a post request made to add
	// a bike into the database

	app.put('/api/bikes/:id', bikes.update);
	// This is a put request used to update
	// any of the bikes in our database
	// The id is in the route params so we
	// can pull it to search for a specific bike

	app.delete('/api/bikes/:id', bikes.delete);
	// This delete request -- obviously -- deletes
	// a bike from the database based on the id
	// given in the route params

	app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./public/dist/index.html"));
	})
	// This is required to connect our express with our
	// angular

};
