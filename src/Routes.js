const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/', (req, res) => {
    // Product.create({
    //     title: "React Nativa",
    //     description: "Build native apps with React",
    //     url: "http://github.com/facebook/react-native"
    // });

    res.send('Hello World !');
});

routes.get('/products', ProductController.index);
routes.get('/productsPaginate', ProductController.paginate);
routes.get('/productsPaginateParamPage', ProductController.paginateWithParam);
routes.post('/storeProduct', ProductController.store);
routes.get('/products/:id', ProductController.show);
routes.put('/updateProduct/:id', ProductController.update);
routes.delete('/deleteProduct/:id', ProductController.destroy);

module.exports = routes;