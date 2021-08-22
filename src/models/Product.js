const mongoose =  require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name:{ 
        type: String,
        required: true,
        trim: true
    },
    category:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true,
    },
    contentNet:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    metodAplication:{
        type: String,
        required: true,
        trim: true
    },
    precaution:{
        type: String,
        required: true,
        trim: true
    },
    amount:{
        type: Number,
        required: true
    },
    toxology:{
        type: String,
        required: true,
        trim: true
    },
    maker:{
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Product", productSchema);


