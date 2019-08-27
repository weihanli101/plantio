const express     = require('express');
const router      = express.Router();
const path        = require('path');
const plantRouter = require('./plants');
const potRouter   = require('./pot');

// API calls
router.use('/plants', plantRouter);
router.use('/pots', potRouter);


// static file declaration
router.use(express.static(path.join(__dirname, '../client/build')));

// build mode
router.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = router;