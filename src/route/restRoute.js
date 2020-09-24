const express = require('express');
const router = express.Router();
const controller = require('../controller/restController')


router.get('/', controller.getAll);
router.get('/rest', controller.getAll);

module.exports = router;

