const router = require('express').Router();
const commentService = require('../services/commentService');

router.get('/:postId', commentService.getComments);

module.exports = router;
