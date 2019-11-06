/*
Aothuor : dhkihandika
Date    : 21/10/2019
*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())
//const db = require('./config/db.config.js');
// force: true will drop the table if it already exists
//db.sequelize.sync({force: true}).then(() => {
//console.log('Drop and Resync with { force: true }');
//});
 
require('./routes/route.js')(app);
 
// Create a Server
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
console.log('====================================');
console.log("App listening at http://%s:%s", host, port)
console.log('====================================');
})

