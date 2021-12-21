const router = require('express').Router();
const postService = require('../services/postService');

router.get('', postService.getPostList);
router.get('/:userId', postService.getPostListByUser);

module.exports = router;
