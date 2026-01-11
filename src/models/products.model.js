import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    _id: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const Product = mongoose.model('product', productSchema)