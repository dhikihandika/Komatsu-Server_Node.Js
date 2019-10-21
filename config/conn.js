const conn = {
    database: 'sql12307664',
    username: 'sql12307664',
    password: 'WkQKAINMsc',
    host: 'sql12.freesqldatabase.com',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = conn;