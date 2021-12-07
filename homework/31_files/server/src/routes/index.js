const router = require('express').Router();
const fileRouter = require('./fileRouter');

router.use('/', fileRouter);

module.exports = router;
