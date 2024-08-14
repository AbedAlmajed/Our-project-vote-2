const express = require('express');
const router = express.Router();
const partyListsController = require('../controllers/partyListsController');

router.get('/', partyListsController.getAllPartyLists);

module.exports = router;
