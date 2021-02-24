var mongoose = require('mongoose');
var shortId= require('shortid')

var products = new mongoose.Schema({
    _id: {type: String, default:shortId.generate},
    image: String,
    title: String,
    description: String,
    availableSizes: [String],
    price: Number
})

var model = mongoose.model('products', products);
module.exports = model;