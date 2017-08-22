const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
	login: function (req, res) {
		User.findOne({username: req.body.username}, (err, user) => {
			if(err){
				return res.status(500).json(err);
			}
			if(user){
				console.log(user)
				req.session.user = user
				return res.json(user)
			}
			// First we check if that user already exists in the database
			// If they do, we pull that info from the database, console.log it,
			// and set our session to that user and then send that info back to our service

			else{
				let newUser = new User(req.body);
				newUser.save(err => {
					if(err){
						return res.status(401).json(err)
					}
					else{
						console.log(newUser)
						req.session.user = newUser
						return res.json(newUser)
					}
				})
			}
			// If they didn't exist in the database, then we create them!
			// We add them to the database and then console.log their info, set session
			// to that info, and pass it along back to our service
		})
	}
}
