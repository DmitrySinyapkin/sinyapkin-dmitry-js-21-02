const router = require('express').Router();
const FileService = require('../services/fileService');

router.get('/getText', FileService.getText);
router.post('/saveText', FileService.saveText);

module.exports = router;
