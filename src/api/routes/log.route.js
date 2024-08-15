const express = require('express');
const router = express.Router();
const {
	getAllLogs,
	getLog,
	createLog,
	updateLog,
	deleteLog,
} = require('../controllers/log.controller');

router.get('/', getAllLogs);
router.get('/:id', getLog);
router.post('/', createLog);
router.put('/:id', updateLog);
router.delete('/:id', deleteLog);

module.exports = router;
