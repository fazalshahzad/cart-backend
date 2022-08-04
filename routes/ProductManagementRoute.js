const express = require('express');
const Router = express.Router();
//calling my controllers
const {ProductData,
    GetProductData
} = require('../controller/ProductManagementController')


Router.post('/ProductData',ProductData);
Router.get('/GetProductData',GetProductData);


module.exports = Router;