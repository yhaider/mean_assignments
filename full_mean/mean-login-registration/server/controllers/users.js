const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');

module.exports = {
	login: function (req, res) {
		User.findOne({email: req.body.email}, (err, user) => {
            if(err){
                return res.status(500).json(err);
            }
			else{
				if(usercheck.password != req.body.password){
					let error = "Invalid password."
					return res.status(401).json(error)
				}

				else{
					console.log('success')
					return res.json(user);
				}
			}

        })


	},

	create: function (req, res) {
		User.find({email:req.body.email}, function(err,user){
			if(user.length > 0){
				return res.status(400).json("Email already registered.")
			}
			else{
				let newUser = new User(req.body);
				newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(8));
				newUser.save(function(err){
					if(err){
						console.warn(err);
						errors.push(err);
						return res.status(400).json({errors: errors});
					}
					else {
						console.log(newUser.password);
						return res.json(newUser);
					}
				})
			}
		})
	}
}
