/*
Aothuor : dhkihandika
Date    : 21/10/2019
*/

module.exports = function(app) {
 
    const resultdata = require('../controller/controller.js')
    const resultdataimage = require('../controller/controllerImage.js');
    //const value = req.body.id_data

    //==============================================================================//
    //====================================== RESTful APIs ==========================//
    //=== POST                ==>  http://localhost:port/post/resultdata         ===//
    //=== GET(Last 10 Data)   ==>  http://localhost:port/get/resultdata          ===//
    //=== GET(Spesific)       ==>  http://localhost:port/get/resultdata/{id}     ===//
    //=== GET('result_image') ==>  http://localhost:port/get/resultdataimage     ===//
    //==============================================================================//

    // Post data to database
    app.post('/post/resultdata', resultdata.create);

    // Retrieve last 10 data
    app.get('/get/resultdata', resultdata.findAll);

    // Retrieve only data in attriute 'result_image'
    app.get('/get/resultdataimage', resultdataimage.findAll);                                                                                                                                                                                                           
 
    // Retrieve a single data by Id
    app.get('/get/resultdata/:resultdataId', resultdata.findByPk);

}