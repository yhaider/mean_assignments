const users = require('./../controllers/users.js');
const questions = require('./../controllers/questions.js');
const answers = require('./../controllers/answers.js');
const path = require("path");


module.exports = function (app) {
	//Set up routes
	// Index route
	app.post('/api/users', users.add);
	app.get('/api/users', users.getID);
	app.get('/api/questions', questions.index);
	app.post('/api/questions', questions.add);
	app.get('/api/questions/:id', questions.showOne);
	app.get('/api/logout', users.logout);
	app.post('/api/answers', answers.add);
	app.get('/api/answers', answers.fetch);

	app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./public/dist/index.html"));
	})

};
