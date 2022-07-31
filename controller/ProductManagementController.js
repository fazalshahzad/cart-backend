const ProductModel = require('../models/ProductManagementModels');


const ProductData = async (req, res) => {
  
  
    try {
        const {ProductName, ProductPrice} = req.body;


        const DocToCreate = new ProductModel({
            ProductName,
            ProductPrice
        })

        const DocToSave = await DocToCreate.save();

        res.json({
            Message:'You Have reached the API end point',
            Body:`${ProductName}\n${ProductPrice}`
        })
    } catch (error) {

        


        res.json({
            Message:error.Message,
            Body:null
        })
        
    }

}
const GetProductData = (req, res) => {
    
}

module.exports = {
    ProductData,
    GetProductData

}

