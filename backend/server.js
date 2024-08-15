
// // server.js
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const authRoutes = require('./routes/authRoutes');
// const loginRoutes = require('./routes');
// require('dotenv').config();

// const localListsRoutes = require('./routes/localListsRoutes'); 
// const partyListsRoutes = require('./routes/partyListsRoutes'); 
// const electoralDistrictsRoute = require('./routes/electoralDistricts');
// app.use('/api', loginRoutes);
// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/local-lists', localListsRoutes); 
// app.use('/api/party-lists', partyListsRoutes); 
// app.use('/api', electoralDistrictsRoute);


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


//////////////////////////////////


// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// require('dotenv').config();

// const authRoutes = require('./routes/authRoutes');
// const localListsRoutes = require('./routes/localListsRoutes');
// const partyListsRoutes = require('./routes/partyListsRoutes');
// const electoralDistrictsRoute = require('./routes/electoralDistricts');
// const userAuthRoutes = require('./routes/userAuthRoutes'); // Adjust path as necessary

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/local-lists', localListsRoutes);
// app.use('/api/party-lists', partyListsRoutes);
// app.use('/api/electoral-districts', electoralDistrictsRoute); // Adjusted endpoint
// app.use('/api/userAuth', userAuthRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


////////////////////////

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const localListsRoutes = require('./routes/localListsRoutes');
const partyListsRoutes = require('./routes/partyListsRoutes');
const electoralDistrictsRoute = require('./routes/electoralDistricts');
const userAuthRoutes = require('./routes/userAuthRoutes'); // Adjust path as necessary

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Ensures the server can parse JSON payloads
app.use(express.json()); // Handles JSON payloads

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/local-lists', localListsRoutes);
app.use('/api/party-lists', partyListsRoutes);
app.use('/api/electoral-districts', electoralDistrictsRoute); // Adjusted endpoint
app.use('/api/userAuth', userAuthRoutes); // Ensure this path matches your routes
// Routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
