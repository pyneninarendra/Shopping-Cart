var mongodb = require('mongoose'); 
var config = require('./config');

module.exports = function(){
    mongodb.connect(config.dbconnection, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true
    }, function(){
        console.log('Connected to DB');
    })
}