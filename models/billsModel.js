const mongoose =require('mongoose');

var billsSchema=new mongoose.Schema({
    createDay:{
        type:Date,
        default:Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    contact:{
        type:Object
    },
    arrFoods:{
        type:Array
    },
    total:{
        type:Number
    },
    cardPayMethod:{
        type:Boolean
    },
    status:{
        type:Number,
        default:2
    }
})

module.exports=mongoose.model('bills',billsSchema);