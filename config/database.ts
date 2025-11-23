const path = require('path');

module.exports = ({ env }) => {
  // Check if we are running on Render (Production)
  const client = env('DATABASE_CLIENT', 'sqlite');

  if (client === 'postgres') {
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: env('DATABASE_URL'),
          ssl: env.bool('DATABASE_SSL', false) && {
            rejectUnauthorized: false,
          },
        },
        pool: {
          min: 2,
          max: 10,
        },
      },
    };
  }

  // Default to SQLite (For Local Development)
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };
};