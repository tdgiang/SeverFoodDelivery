const mongoose =require('mongoose');


var collectionsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true   //Yêu cầu không được để trống
    },
    kids:{
        type:[{type:mongoose.Schema.Types.ObjectId}]
    },
    createDay:{
        type:Date,
        default:Date.now
    },
    img:{
        type:String,
        required:true
    },
    order:{
        type:Number
    }
})


module.exports=mongoose.model('collections',collectionsSchema);