const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
	add: function (req, res) {
		let user = new User(req.body);
		user.save((err) => {
			if(err){
				return res.status(401).json(err);
			}
			else{
				console.log(`${user} has been saved`)
				req.session.user = user;
				res.json({user: user});
			}
		})
	},
	// This adds a user to the database
	// Since it's really just based on name, we don't care
	// if there are multiple users in the database with the
	// same name (that'd be unfair...), so we don't need to check
	// for that.
	// Instead, we just add the user and set req.session.user as
	// the user so we can grab the name whenever required

	getID: function (req, res) {
		if(req.session.user){
			res.json(req.session.user);
		}
		else{
			console.log("Not logged in.")
		}
	}
	// This will just get us the user object of the
	// person logged in
}
