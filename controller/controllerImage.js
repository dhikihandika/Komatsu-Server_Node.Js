/*
Aothuor : dhkihandika
Date    : 22/10/2019
*/

const db = require('../config/config.js');
const ResultDataImage = db.resultdata;                                   // "db" take from ./models/model.js

exports.findAll = (req, res) => {  
    ResultDataImage.findAll({
        attributes: ['result_image'],
        limit: 10,                                                                 
        where: {                                                         
        },                                                              // your where conditions, or without them if you need ANY entry
        order: [ ['id', 'DESC'] ]                                         // Limit from DESC
        }).then(resultdataimage => {
            res.send(resultdataimage)                                   // Send data from server
            console.log(resultdataimage);
        });
    };