const router = require('express').Router();
const FileService = require('../services/fileService');

router.get('/', FileService.getTextFromFile);
router.post('/', FileService.saveTextToFile);

module.exports = router;
