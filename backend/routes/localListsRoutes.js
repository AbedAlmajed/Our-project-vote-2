const express = require('express');
const router = express.Router();
const localListsController = require('../controllers/localListsController');

router.get('/', localListsController.getAllLocalLists); // Route should match the API endpoint in React

module.exports = router;
