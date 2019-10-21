const conn = require('./conn.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(conn.database, conn.username, conn.password, {         
  host: conn.host,
  dialect: conn.dialect,
  //operatorsAliases:false,
 
  pool: {
    max: conn.max,
    min: conn.pool.min,
    acquire: conn.pool.acquire,
    idle: conn.pool.idle
  }
});

sequelize.authenticate().then(()=>{
    console.log('Connection to database sucessfully!');
}).catch(err => {
    console.error('Unable connection to the database: ', err);
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.resultdata = require('../models/model.js')(sequelize, Sequelize);               // "db" send to ../models/model.js

module.exports = db;