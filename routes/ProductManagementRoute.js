const express = require('express');
const Router = express.Router();
//calling my controllers
const {ProductData} = require('../controller/ProductManagementController')


Router.post('/ProductData',ProductData);


module.exports = Router;