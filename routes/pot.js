const express = require('express');
const router = express.Router();
const pot = require('../controllers/pot.controller');

router.post('/', pot.create);
router.put('/', pot.update);

module.exports = router;