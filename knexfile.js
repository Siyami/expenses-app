'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/expenses'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
