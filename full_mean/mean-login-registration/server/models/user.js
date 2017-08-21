'use strict';
const mongoose = require('mongoose');
var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const UserSchema = new mongoose.Schema({
	fname: {
		type: String,
		required: [true, "Please enter your first name."],
		minLength: [2, "Please enter at least 2 characters."]
	},
	lname: {
		type: String,
		required: [true, "Please enter your last name."],
		minLength: [2, "Please enter at least 2 characters."]
	},
	age: {
		type: Number,
		required: [true, "Please enter your age."],
		min: [18, "You must be 18 or older to sign up."]
	},
	email: {
		type: String,
		required: [true, "Please enter your email."],
		minLength: [6, "Please enter a valid email."],
	},
	password: {
		type: String,
		required: [true, "Please enter your password."],
		minLength: [8, "Please enter a password of at least 8 characters."]
	},
	passwordconfirm: {
		type: String,
		required: [true, "Please enter your password."],
		minLength: [8, "Please enter a password of at least 8 characters."]
	}
})
const User = mongoose.model('User', UserSchema)
