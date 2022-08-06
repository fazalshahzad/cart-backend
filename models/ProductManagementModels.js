const mongoose =require('mongoose');



//date setup


const today = new Date();
const day = today.getDate();
const month = today.getMonth() +1;
const year = today.getFullYear();
const time = today.getTime();


//start block schema

const ProductSchema =mongoose.Schema({
    ProductName:{type:String, required:true, unique:true},
    ProductPrice:{type:Number, required:true},
    Status: {type:Number, default:1},
    CreatedData: {
        type:String,
        default:`${year}-${month}-${day},${time}`,
    }
})


//exporting schema


module.exports=mongoose.model('ProductCollection',ProductSchema);

