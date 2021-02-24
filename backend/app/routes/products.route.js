var productsctrl = require('../controllers/products.ctrl');
module.exports = function(app){
    app.get('/',productsctrl.get);
    app.get('/products',productsctrl.get);
    app.post('/products', productsctrl.post);
    app.delete('/products/:id', productsctrl.delete);    
}