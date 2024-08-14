// const express = require('express');
// const router = express.Router();
// const userAuthController = require('../controllers/userAuthController');

// router.post('/login', userAuthController.authenticateUser); // Adjust route if needed

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const userAuthController = require('../controllers/userAuthController');

// router.post('/login', userAuthController.authenticateUser);

// module.exports = router;
/////////////////////////

// routes/userAuthRoutes.js
const express = require('express');
const router = express.Router();
const userAuthController = require('../controllers/userAuthController');

router.post('/login', userAuthController.authenticateUser);

module.exports = router;
