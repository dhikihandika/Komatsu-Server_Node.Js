/*
Aothuor : dhkihandika
Date    : 21/10/2019
*/

const conn = {
    database: 'db_vision',
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = conn;