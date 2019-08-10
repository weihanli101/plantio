const express = require('express');
const router = express.Router();
const plant = require('../controllers/plant.controller');

router.post('/', plant.create);
router.get('/user/:id', plant.findAllUserPlants);
router.get('/:id', plant.findOne);

module.exports = router;