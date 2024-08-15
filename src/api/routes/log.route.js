const express = require('express');
const router = express.Router();
const logController = require('../controllers/log.controller');

router.get('/', logController.getAllLogs);
router.get('/:id', logController.getLog);
router.post('/', logController.createLog);
router.put('/:id', logController.updateLog);
router.delete('/:id', logController.deleteLog);

module.exports = router;
