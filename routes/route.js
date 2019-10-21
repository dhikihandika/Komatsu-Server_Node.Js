module.exports = function(app) {
 
    const resultdata = require('../controller/controller.js')
    //const value = req.body.id_data

    //==============================================================================//
    //====================================== RESTful APIs ==========================//
    //=== GET                 ==>  http://localhost:port/get/resultdata          ===//
    //=== GET(Spesific)       ==>  http://localhost:port/get/resultdata/{id}     ===//
    //==============================================================================//
    // Retrieve all data
    app.get('/get/resultdata', resultdata.findAll);
 
    // Retrieve a single data by Id
    app.get('/get/resultdata/:resultdataId', resultdata.findByPk);

}