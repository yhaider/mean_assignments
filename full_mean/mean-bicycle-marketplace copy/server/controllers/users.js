const mongoose = require('mongoose');
const User = mongoose.model('User');
// We're activating the mongoose model of
// user we made in our models dir, under
// the user.js file

module.exports = {
	index: function (req, res) {
		console.log('Hit home route');
		let err = false
		// User.find({},(err, objs) =>{
		// 	if(err) console.log(`There was some sort of error \n ${err}`);
		// 	else {
		// 		console.log('querried DB');
		// 		values.users = objs
		// 		console.log(values.users);
		// 		return res.render('index', values)
		// 	}
		// })
		if (err) return res.status(400).json({errors:'failure'})
		return res.json({success:'success'})
	}
}
