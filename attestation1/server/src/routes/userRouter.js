const router = require('express').Router();
const userService = require('../services/userService');

router.get('', userService.getUserList);
router.get('/:id', userService.getUser);

module.exports = router;
