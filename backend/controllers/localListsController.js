const knex = require('../knex-config'); // Import your knex instance

exports.getAllLocalLists = async (req, res) => {
  try {
    const localLists = await knex('local_lists').select('*');
    res.json(localLists);
  } catch (error) {
    console.error('Error fetching local lists:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
