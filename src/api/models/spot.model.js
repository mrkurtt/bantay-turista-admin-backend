const mongoose = require('mongoose');

const spotSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		photo_url: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true, // Automatically add createdAt and updatedAt fields
	}
);

const Spot = mongoose.model('Spot', spotSchema);
module.exports = Spot;
