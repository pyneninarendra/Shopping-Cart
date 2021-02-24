var config = require('./app/config/config');
var app = require('./app/config/express')();
var mongoose = require('./app/config/mongodb')();

app.listen(config.port)

console.log('Server running at port: ', config.port);