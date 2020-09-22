const express = require('express');
const router = express.Router();
const controller = require('../controller/lpController')


router.get('/', controller.getAll);
router.get('/lp', controller.getAll);

module.exports = router;

