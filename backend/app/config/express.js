var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');

module.exports = function(){
    var app = express();
    app.use(cors());

    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({
        extended: false
    }))

    app.use(bodyParser.json());

    var accessLogStream = fs.createWriteStream(path.join('__dir', './../access.log'), {
        flags: 'a'
    })

    app.use(morgan('combined', {
        stream: accessLogStream
    }))

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    require('../routes/products.route')(app);
    
    return app
}