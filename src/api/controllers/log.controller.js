const Log = require('../models/log.model');

const createLog = async (req, res) => {
	const { tourist_id, establishment_id } = req.body;

	try {
		const newLog = new Log({
			tourist_id,
			establishment_id,
		});

		await newLog.save();
		res.status(201).json({
			success: true,
			message: 'Log created successfully',
			log: newLog,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const getAllLogs = async (req, res) => {
	try {
		const logs = await Log.find()
			.populate('tourist_id')
			.populate('establishment_id');

		res.status(200).json({
			success: true,
			logs,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const getLog = async (req, res) => {
	const { id } = req.params;

	try {
		const log = await Log.findById(id)
			.populate('tourist_id')
			.populate('establishment_id');

		if (!log) {
			return res.status(404).json({ success: false, message: 'Log not found' });
		}

		res.status(200).json({
			success: true,
			log,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const updateLog = async (req, res) => {
	const { id } = req.params;
	const { tourist_id, establishment_id } = req.body;

	try {
		const updatedLog = await Log.findByIdAndUpdate(
			id,
			{
				tourist_id,
				establishment_id,
			},
			{ new: true } // Return the updated document
		);

		if (!updatedLog) {
			return res.status(404).json({ success: false, message: 'Log not found' });
		}

		res.status(200).json({
			success: true,
			message: 'Log updated successfully',
			log: updatedLog,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const deleteLog = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedLog = await Log.findByIdAndDelete(id);

		if (!deletedLog) {
			return res.status(404).json({ success: false, message: 'Log not found' });
		}

		res.status(200).json({
			success: true,
			message: 'Log deleted successfully',
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

module.exports = {
	createLog,
	getAllLogs,
	getLog,
	updateLog,
	deleteLog,
};
