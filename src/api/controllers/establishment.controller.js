const Establishment = require('../models/establishment.model');

const createEstablishment = async (req, res) => {
	const {
		establishment_name,
		establishment_type,
		city_municipality,
		barangay,
		complete_address,
		contact_number,
		email_address,
		photo_url,
		user_id,
	} = req.body;

	try {
		const newEstablishment = new Establishment({
			establishment_name,
			establishment_type,
			city_municipality,
			barangay,
			complete_address,
			contact_number,
			email_address,
			photo_url,
			user_id,
		});

		await newEstablishment.save();
		res.status(201).json({
			success: true,
			message: 'Establishment registered successfully',
			establishment: newEstablishment,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const getEstablishment = async (req, res) => {
	const { id } = req.params;

	try {
		const establishment = await Establishment.findById(id);

		if (!establishment) {
			return res
				.status(404)
				.json({ success: false, message: 'Establishment not found' });
		}

		res.status(200).json({
			success: true,
			establishment,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const updateEstablishment = async (req, res) => {
	const { id } = req.params;
	const {
		establishment_name,
		establishment_type,
		city_municipality,
		barangay,
		complete_address,
		contact_number,
		email_address,
		photo_url,
		user_id,
	} = req.body;

	try {
		const updatedEstablishment = await Establishment.findByIdAndUpdate(
			id,
			{
				establishment_name,
				establishment_type,
				city_municipality,
				barangay,
				complete_address,
				contact_number,
				email_address,
				photo_url,
				user_id,
			},
			{ new: true } // Return the updated document
		);

		if (!updatedEstablishment) {
			return res
				.status(404)
				.json({ success: false, message: 'Establishment not found' });
		}

		res.status(200).json({
			success: true,
			message: 'Establishment updated successfully',
			establishment: updatedEstablishment,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const deleteEstablishment = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedEstablishment = await Establishment.findByIdAndDelete(id);

		if (!deletedEstablishment) {
			return res
				.status(404)
				.json({ success: false, message: 'Establishment not found' });
		}

		res.status(200).json({
			success: true,
			message: 'Establishment deleted successfully',
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

module.exports = {
	createEstablishment,
	getEstablishment,
	updateEstablishment,
	deleteEstablishment,
};
