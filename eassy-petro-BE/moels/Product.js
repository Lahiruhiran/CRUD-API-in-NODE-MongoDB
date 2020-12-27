const mongoose = require('mongoose')

const schema = mongoose.Schema;

const ProductSchema = new schema({

    name:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    brand:{
        type:String,
        required: true
    },
    quantity:{
        type:Number,
        required: true
    },
    discount:{
        type:Number,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default : Date.now
    }
    
});

module.exports =mongoose.model('Product', ProductSchema)