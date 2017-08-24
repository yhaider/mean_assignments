const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    login: function (req, res) {
        User.findOne({name: req.body.name}, (err, user) => {
			if(err){
				return res.status(401).json(err)
			}
			else if(user){
				req.session.user = user
				res.json({user: user})
			}
			else{
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
			}
		})
    },
    // This method finds the user in the database and if they exist, then
    // it'll log them in and store the name in session
    // If they don't exist, it'll create a new user in the database and then
    // save their name in session

    getID: function (req, res) {
		if(req.session.user){
			return res.json(req.session.user);
		}
		else{
			return res.status(500).json("Not logged in")
		}
	},
    // This method is only run after the user is logged in.
    // Thus the name is already stored in session
    // So, this method just grabs the name from session to be
    // used in our front end

    logout: function (req, res) {
        req.session.destroy()
		return res.json('bye bye');
    }
    // Logout clears our session


}
