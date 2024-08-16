const mongoose = require('mongoose');

const userModel = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ['tourist', 'establishment', 'admin'],
			required: true,
		},
	},
	{
		timestamp: true,
	}
);

const User = mongoose.model('User', userModel);
module.exports = User;
