
module.exports = {
  development: {
    client: 'pg', 
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'Abed@0782744028',
      database: 'Election'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
};


// require('dotenv').config();

// module.exports = {
//   development: {
//     client: 'pg',
//     connection: {
//       host: process.env.DB_HOST || 'localhost',
//       database: process.env.DB_NAME || 'Test-real',
//       user: process.env.DB_USER || 'postgres',
//       password: process.env.DB_PASSWORD || '',
//     },
//     migrations: {
//       directory: './migrations',
//     },
//     seeds: {
//       directory: './seeds',
//     },
//   },

//   test: {
//     client: 'postgresql',
//     connection: {
//       host: process.env.DB_HOST || 'localhost',
//       database: process.env.TEST_DB_NAME || 'Test-real',
//       user: process.env.DB_USER || 'postgres',
//       password: process.env.DB_PASSWORD || '',
//     },
//     migrations: {
//       directory: './migrations',
//     },
//     seeds: {
//       directory: './db/seeds',
//     },
//   },

//   production: {
//     client: 'postgresql',
//     connection: process.env.DATABASE_URL,
//     migrations: {
//       directory: './migrations',
//     },
//     seeds: {
//       directory: './seeders',
//     },
//   },
// };
