/*
Aothuor : dhkihandika
Date    : 21/10/2019
*/

module.exports = (sequelize, Sequelize) => {
    const dbModel = sequelize.define('resultdata', {                           // 'dataresult' is table name of database
      nama_op: {
      type: Sequelize.STRING
      },
      model_type: {
      type: Sequelize.STRING
      },
      model_urut: {
      type: Sequelize.INTEGER
      },
      result_image: {
      type: Sequelize.BLOB('long')
      },
      result_checkbox: {
      type: Sequelize.INTEGER
      },
      result_presentase: {
      type: Sequelize.INTEGER
      },
    });
    
    return dbModel;
  }