const Spot = require('../models/spot.model');

const createSpot = async (req, res) => {
	const { name, description, photo_url } = req.body;

	try {
		const newSpot = new Spot({
			name,
			description,
			photo_url,
		});

		await newSpot.save();
		res.status(201).json({
			success: true,
			message: 'Spot created successfully',
			spot: newSpot,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const getAllSpots = async (req, res) => {
	try {
		const spots = await Spot.find();

		res.status(200).json({
			success: true,
			spots,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const getSpot = async (req, res) => {
	const { id } = req.params;

	try {
		const spot = await Spot.findById(id);

		if (!spot) {
			return res
				.status(404)
				.json({ success: false, message: 'Spot not found' });
		}

		res.status(200).json({
			success: true,
			spot,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const updateSpot = async (req, res) => {
	const { id } = req.params;
	const { name, description, photo_url } = req.body;

	try {
		const updatedSpot = await Spot.findByIdAndUpdate(
			id,
			{ name, description, photo_url },
			{ new: true } // Return the updated document
		);

		if (!updatedSpot) {
			return res
				.status(404)
				.json({ success: false, message: 'Spot not found' });
		}

		res.status(200).json({
			success: true,
			message: 'Spot updated successfully',
			spot: updatedSpot,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const deleteSpot = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedSpot = await Spot.findByIdAndDelete(id);

		if (!deletedSpot) {
			return res
				.status(404)
				.json({ success: false, message: 'Spot not found' });
		}

		res.status(200).json({
			success: true,
			message: 'Spot deleted successfully',
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

module.exports = { getAllSpots, getSpot, createSpot, updateSpot, deleteSpot };
