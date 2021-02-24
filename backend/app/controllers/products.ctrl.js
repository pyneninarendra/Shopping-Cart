var productModel = require('../models/products');
var productsController = {}

productsController.get = function(req, res) {
    getData(req, res);
}

productsController.post = function(req, res) {
    saveProduct(req,res)
}

productsController.delete = function(req, res) {
    deleteProduct(req, res)
}

var getData = (req, res) => {
    productModel.find({}, function(error, info){
        if(error){
            res.status(404).send(error.message);
        } else {
            res.status(200).send(info);
            console.log('Data Fetched: ', info)
        }
    })    
}

var deleteProduct = (req, res) =>{
    productModel.findByIdAndDelete(req.params.id, (error, data)=>{
        if(error){
            res.send(error)
        } else{
            res.send(data)
        }
    })
}

var saveProduct = (req, res) => {
    console.log(req.body);
    var product = new productModel(req.body)
    product.save(function(err, product){
        if(err){
            res.status(404).send(err)
        } else {
            res.status(200).send(product)
        }
    });
}

module.exports = productsController;
