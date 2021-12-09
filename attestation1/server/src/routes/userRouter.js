const router = require('express').Router();
const userService = require('../services/userService');

router.get('', userService.getUserList);

module.exports = router;
