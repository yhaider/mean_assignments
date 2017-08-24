'use strict';
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type:String,
		required: [true, "Please enter a name."]
	}
	// This site only requires a name, so here we
	// have our user schema which only requires a name
})
const User = mongoose.model('User', UserSchema)
