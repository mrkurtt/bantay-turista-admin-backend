const mongoose = require('mongoose');

const logModel = mongoose.Schema(
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
		timestamps: true,
	}
);

const Log = mongoose.model('Log', logModel);
module.exports = Log;
