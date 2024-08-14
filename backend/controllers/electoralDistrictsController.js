// backend/controllers/electoralDistrictsController.js
const db = require('../knex-config'); // Adjust the path to your database module

// Function to get all electoral districts
exports.getAllDistricts = async (req, res) => {
  try {
    const districts = await db('electoral_districts').select('*');
    res.json(districts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch electoral districts' });
  }
};
