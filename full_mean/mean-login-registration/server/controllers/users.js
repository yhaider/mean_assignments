const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
	login: function (req, res) {
		User.findOne({email: req.body.email}, (err, user) => {
            if(err){
                return res.status(500).json(err);
            }
            return res.json(user);
        })

	},

	create: function (req, res) {
		let user = new User(req.body);
        user.save((err) => {
            if(err){
                return res.status(401).json(err);
            }
            return res.json(user);
        });
	}
}
