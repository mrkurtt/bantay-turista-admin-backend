const mongoose = require('mongoose');

const adminModel = mongoose.Schema({
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
});

const Admin = mongoose.model('Admin', adminModel);
module.exports = Admin;
