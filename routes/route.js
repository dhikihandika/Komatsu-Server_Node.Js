module.exports = function(app) {
 
    const resultdata = require('../controller/controller.js')
    //const value = req.body.id_data

    //==============================================================================//
    //====================================== RESTful APIs ==========================//
    //=== POST                ==>  http://localhost:port/post/resultdata         ===//
    //=== GET                 ==>  http://localhost:port/get/resultdata          ===//
    //=== GET(Spesific)       ==>  http://localhost:port/get/resultdata/{id}     ===//
    //==============================================================================//

    // Post data to database
    app.post('/post/resultdata', resultdata.create);
    // Retrieve all data
    app.get('/get/resultdata', resultdata.findAll);
 
    // Retrieve a single data by Id
    app.get('/get/resultdata/:resultdataId', resultdata.findByPk);

}