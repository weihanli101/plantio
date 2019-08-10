const express     = require('express');
const router      = express.Router();
const path        = require('path');
const plantRouter = require('./plants');

// API calls
router.use('/plants', plantRouter);


module.exports = router;