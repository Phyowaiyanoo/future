const mongoose = require("mongoose")
const Postschema = mongoose.Schema(
   {
     name:{
        type:String,
        require :true
    },
    email:{
        type:String,
        require :true
    },
    password:{
        type:Number,
        require :true
    }
   },{timestamps : true}
);

const Data = mongoose.model("CusName",Postschema);
module.exports = Data;