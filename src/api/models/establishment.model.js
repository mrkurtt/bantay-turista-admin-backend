const mongoose = require('mongoose');

const establishmentModel = mongoose.Schema({
	establishment_name: {
		type: String,
		required: true,
	},
	establishment_type: {
		type: String,
		required: true,
	},
	city_municipality: {
		type: String,
		required: true,
	},
	barangay: {
		type: String,
		required: true,
	},
	complete_address: {
		type: String,
		required: true,
	},
	contact_number: {
		type: String,
		required: true,
	},
	email_address: {
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

const Establishment = mongoose.model('Establishment', establishmentModel);
module.exports = Establishment;
