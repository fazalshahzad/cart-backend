const express = require('express');
const Router = express.Router();
//calling my controllers
const {ProductData,
    GetProductData,
    UpdateMyProductData,
    DeleteMyProductData
} = require('../controller/ProductManagementController')


Router.post('/ProductData',ProductData);
Router.get('/GetProductData',GetProductData);
Router.post('/UpdateMyProductData',UpdateMyProductData);
Router.delete('/DeleteMyProductData',DeleteMyProductData);


module.exports = Router;