const mongoose = require('mongoose');

const logsModel = mongoose.Schema(
	{
		tourist_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Tourist',
			required: true,
		},
		establishment_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Establishment',
			required: true,
		},
	},
	{
		timestamp: true,
	}
);
