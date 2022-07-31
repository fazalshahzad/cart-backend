const ProductData = (req, res) => {
  
  
    try {
        res.json({
            Message:'You Have reached the API end point',
            Body:req.body
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

