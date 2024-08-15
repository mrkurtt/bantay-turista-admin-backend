const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema(
	{
		tourist_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Tourist',
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		resolved: {
			type: Boolean,
			default: false, // Default to false if not specified
		},
	},
	{
		timestamps: true, // Automatically add createdAt and updatedAt fields
	}
);

const Complaint = mongoose.model('Complaint', complaintSchema);
module.exports = Complaint;
