const ProductModel = require('../models/ProductManagementModels');


const ProductData = async (req, res) => {


    try {
        const { ProductName, ProductPrice } = req.body;


        const DocToCreate = new ProductModel({
            ProductName,
            ProductPrice
        })

        const DocToSave = await DocToCreate.save();

        res.json({
            Message: 'You Have reached the API end point',
            Body: `${ProductName}\n${ProductPrice}`
        })
    } catch (error) {




        res.json({
            Message: error.Message,
            Result: null,
            Data: false
        })

    }

}
const GetProductData = async (req, res) => {
    try {
        const DocToGet = await ProductModel.find({}, { ProductPrice: 0 });
        res.json({
            Message: `Document found`,
            Data: true,
            Result: DocToGet
        })
    } catch (error) {
        res.json({
            Message: error.Message,
            Result: null,
            Data: false})

    }

}


const UpdateMyProductData = async(req, res) => {
    try {

        const DocToUpdate = await ProductModel.updateMany(
            {Status:0},
            {Status:1}
        )
        res.json({
            Message: `Document Updated`,
            Data: true,
            Result: DocToUpdate
        })
    } catch (error) {
        res.json({
            Message: error.Message,
            Result: null,
            Data: false})
    }
}
const DeleteMyProductData = async(req, res) => {
    try {

        const DocToDelete = await ProductModel.deleteOne(
            {Status:0}
        )
        res.json({
            Message: `Document Updated`,
            Data: true,
            Result: DocToDelete
        })
    } catch (error) {
        res.json({
            Message: error.Message,
            Result: null,
            Data: false})
    }
}


module.exports = {
    ProductData,
    GetProductData,
    UpdateMyProductData,
    DeleteMyProductData

}

