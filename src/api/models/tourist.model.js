const mongoose = require('mongoose');

const touristModel = mongoose.Schema({
	qr_code: {
		type: String,
		required: true,
	},
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	email_address: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	nationality: {
		type: String,
		required: true,
	},
	birthdate: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	province: {
		type: String,
		required: true,
	},
	city_municipality: {
		type: String,
		required: true,
	},
	photo_url: {
		type: String,
		required: true,
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
});

const Tourist = mongoose.model('Tourist', touristModel);
module.exports = Tourist;
