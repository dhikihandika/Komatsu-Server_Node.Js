/*
Aothuor : dhkihandika
Date    : 21/10/2019
*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http')



app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With");
res.header("Access-Control-Allow-Headers", "Content-Type");
res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
next();
});

app.use(bodyParser.json())
//const db = require('./config/db.config.js');
// force: true will drop the table if it already exists
//db.sequelize.sync({force: true}).then(() => {
//console.log('Drop and Resync with { force: true }');
//});

// Node.js test
function onRequest(req, res){
  res.writeHead(200,{'Content-Type':'text/plain'})
  res.write("Node Server Works!!")
  res.end()
}
http.createServer(onRequest).listen(3000)
 
// Express JS server
require('./routes/route.js')(app);
// Create a Server
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
console.log('====================================');
console.log("App listening at http://%s:%s", host, port)
console.log('====================================');
})

