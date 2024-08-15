const express = require('express');
const router = express.Router();
const {
	createComplaint,
	getComplaint,
	getAllComplaints,
	updateComplaint,
	deleteComplaint,
} = require('../controllers/complaint.controller');

router.get('/', getAllComplaints);
router.get('/:id', getComplaint);
router.post('/', createComplaint);
router.put('/:id', updateComplaint);
router.delete('/:id', deleteComplaint);

module.exports = router;
