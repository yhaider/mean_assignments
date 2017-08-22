const users = require('./../controllers/users.js');
const questions = require('./../controllers/questions.js');


module.exports = function (app) {
	//Set up routes
	// Index route
	app.post('/api/users', users.add);
	app.get('/api/users', users.getID);
	app.get('/api/questions', questions.index);
	app.post('/api/questions', questions.add);

	app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./public/dist/index.html"));
	})

};
