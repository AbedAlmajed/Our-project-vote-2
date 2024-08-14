// backend/routes/electoralDistricts.js
const express = require('express');
const router = express.Router();
const db = require('../knex-config'); // Adjust the path to your database module

router.get('/electoral-districts', async (req, res) => {
  try {
    const districts = await db('electoral_districts').select('*');
    res.json(districts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch electoral districts' });
  }
});

module.exports = router;
