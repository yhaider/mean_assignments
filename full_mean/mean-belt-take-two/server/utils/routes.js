const users = require('./../controllers/users.js');
const polls = require('./../controllers/polls.js');
const path = require('path');

module.exports = function (app) {
	//Set up routes

	app.post('/api/users', users.login);
	// Logs the user in or creates user

	app.get('/api/users/one', users.getID);
	// This is the method we can use to grab the user's
	// name from the database after it is stored in session
	// by initial login

	app.get('/api/users/logout', users.logout);
	// Logs the user out by clearing session

	app.post('/api/polls', polls.create);
	// Create a new poll in the database

	app.get('/api/polls', polls.get);
	// Get all the polls

	app.delete('/api/polls/:id', polls.delete);
	// Delete a poll

	app.get('/api/options/:id', polls.getOptions);
	// Get all of one poll's options

	app.get('/api/polls/:id', polls.getPoll);
	// Get a single poll

	app.put('/api/options', polls.vote);
	// Add a vote to an option

	app.get('/api/options/one/:id', polls.getOption)
	// Get a single options

	app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./public/dist/index.html"));
	})
	// This connects our server/express with our frontend/angular!

};
