const db = require('../config/config.js');
const ResultData = db.resultdata;                                   // "db" take from ./models/model.js
 
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