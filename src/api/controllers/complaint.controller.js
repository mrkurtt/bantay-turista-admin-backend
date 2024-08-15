const Complaint = require('../models/complaint.model');

const createComplaint = async (req, res) => {
	const { tourist_id, description, resolved } = req.body;

	try {
		const newComplaint = new Complaint({
			tourist_id,
			description,
			resolved,
		});

		await newComplaint.save();
		res.status(201).json({
			success: true,
			message: 'Complaint created successfully',
			complaint: newComplaint,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const getAllComplaints = async (req, res) => {
	try {
		const complaints = await Complaint.find().populate('tourist_id');

		res.status(200).json({
			success: true,
			complaints,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const getComplaint = async (req, res) => {
	const { id } = req.params;

	try {
		const complaint = await Complaint.findById(id).populate('tourist_id');

		if (!complaint) {
			return res
				.status(404)
				.json({ success: false, message: 'Complaint not found' });
		}

		res.status(200).json({
			success: true,
			complaint,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const updateComplaint = async (req, res) => {
	const { id } = req.params;
	const { tourist_id, description, resolved } = req.body;

	try {
		const updatedComplaint = await Complaint.findByIdAndUpdate(
			id,
			{ tourist_id, description, resolved },
			{ new: true } // Return the updated document
		);

		if (!updatedComplaint) {
			return res
				.status(404)
				.json({ success: false, message: 'Complaint not found' });
		}

		res.status(200).json({
			success: true,
			message: 'Complaint updated successfully',
			complaint: updatedComplaint,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

const deleteComplaint = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedComplaint = await Complaint.findByIdAndDelete(id);

		if (!deletedComplaint) {
			return res
				.status(404)
				.json({ success: false, message: 'Complaint not found' });
		}

		res.status(200).json({
			success: true,
			message: 'Complaint deleted successfully',
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

module.exports = {
	createComplaint,
	getAllComplaints,
	getComplaint,
	updateComplaint,
	deleteComplaint,
};
