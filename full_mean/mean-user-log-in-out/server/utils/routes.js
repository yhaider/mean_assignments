const users = require('./../controllers/users.js');
const path = require('path');
module.exports = function (app) {
	//Set up routes

	app.post('/api/users/login', users.login);
	// This runs our login method in our controller!
	
	app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./public/dist/index.html"));
	})

};
