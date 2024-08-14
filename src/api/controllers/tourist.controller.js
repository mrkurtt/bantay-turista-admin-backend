const Tourist = require('../models/tourist.model');
const generateQrCode = require('../utils/generateQrCode');

const createTourist = async (req, res) => {
	const {
		first_name,
		last_name,
		email_address,
		gender,
		nationality,
		birthdate,
		country,
		province,
		city_municipality,
		photo_url,
		user_id,
	} = req.body;

	try {
		const qrCode = await generateQrCode();

		const newTourist = new Tourist({
			qr_code: qrCode,
			first_name,
			last_name,
			email_address,
			gender,
			nationality,
			birthdate,
			country,
			province,
			city_municipality,
			photo_url,
			user_id,
		});

		await newTourist.save();

		res.status(201).json({
			success: true,
			message: 'Tourist registered successfully',
			newTourist,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const getTourist = async (req, res) => {
	const { id } = req.params;

	try {
		const tourist = await Tourist.findById(id);

		if (!tourist) {
			return res
				.status(404)
				.json({ success: false, message: 'Tourist not found' });
		}

		res.status(200).json({
			success: true,
			tourist,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const updateTourist = async (req, res) => {
	const { id } = req.params;
	const {
		first_name,
		last_name,
		email_address,
		gender,
		nationality,
		birthdate,
		country,
		province,
		city_municipality,
		photo_url,
		user_id,
	} = req.body;

	try {
		const updatedTourist = await Tourist.findByIdAndUpdate(
			id,
			{
				first_name,
				last_name,
				email_address,
				gender,
				nationality,
				birthdate,
				country,
				province,
				city_municipality,
				photo_url,
				user_id,
			},
			{ new: true } // Return the updated document
		);

		if (!updatedTourist) {
			return res
				.status(404)
				.json({ success: false, message: 'Tourist not found' });
		}

		res.status(200).json({
			success: true,
			message: 'Tourist updated successfully',
			tourist: updatedTourist,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const deleteTourist = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedTourist = await Tourist.findByIdAndDelete(id);

		if (!deletedTourist) {
			return res
				.status(404)
				.json({ success: false, message: 'Tourist not found' });
		}

		res.status(200).json({
			success: true,
			message: 'Tourist deleted successfully',
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

module.exports = { createTourist, getTourist, updateTourist, deleteTourist };
