'use strict';
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please enter a name."]
	}
}, {timestamps: true})
const User = mongoose.model('User', UserSchema)
