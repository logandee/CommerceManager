const controller = require('../controllers/controllers');
const path = require('path');

module.exports = (app) => {
    app.get('/api/products', controller.getAll);
    app.get('/api/products/:id', controller.getOne);
    app.post('/api/products/create', controller.createProduct);
    app.put('/api/products/:id/editproduct', controller.editProduct);
    app.delete('/api/products/:id/deleteproduct', controller.deleteProduct);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}