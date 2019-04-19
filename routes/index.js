const express = require('express');
const router  = express.Router();
const path    = require('path');


// static file declaration
router.use(express.static(path.join(__dirname, 'client/build')));

// production routes
if(process.env.NODE_ENV === 'production') {
	router.use(express.static(path.join(__dirname, 'client/build')));

	router.get('*', (req, res) => {
		res.sendfile(path.join(__dirname = 'client/build/index.html'));
	});
}

// build mode
router.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = router;