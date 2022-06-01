const express = require('express');

const productRoutes = express.Router();

const { getAllProducts, addProduct, getOneProduct, deleteOneProduct } = require('../controllers/productController.js');

productRoutes.get('/getall', getAllProducts);
productRoutes.post('/addProduct', addProduct);
productRoutes.get('/getProduct/:id', getOneProduct);
productRoutes.delete('/:id', deleteOneProduct);

module.exports = productRoutes;