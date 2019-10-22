const db = require('../config/config.js');
const ResultData = db.resultdata;                                   // "db" take from ./models/model.js
const { validationResult } = require ('express-validator');

// ------------------------------------------------------ POST a DataVawt to database ------------------------------------------------------------------//
exports.create = (req, res) => {  
  // Save to MySQL database 
  ResultData.create({ 
    nama_op: req.body.nama_op,
    model_type: req.body.model_type,
    model_urut: req.body.model_urut,
    result_image: req.body.result_image,
    result_checkbox: req.body.result_checkbox,
    result_presentase: req.body.result_presentase
  }).then(resultdata => {    
    // Send created customer to client
    res.json({
      "Message" : "Created data success",
      "item" : resultdata
    });
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(body));
    res.send(resultdata);
  });//catch error here
};
 
// ------------------------------------------------------------ FETCH all ResultData ---------------------------------------------------------------------//
exports.findAll = (req, res) => {
  ResultData.findAll().then(resultdata => {
    // Send all customers to Client
    //let name="data";
    //let tick=JSON.stringify(name);
    //let tack=JSON.stringify(ResultData)
    //res.send("{" + tick + ":" + tack + "}");
    res.send(resultdata);
  });
};
 

// ---------------------------------------------------------- Find a ResultData by Id --------------------------------------------------------------------//
exports.findByPk = (req, res) => {  
ResultData.findByPk(req.params.resultdataId).then(resultdata => {
    res.send(resultdata);
  })
};