
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['online', 'offline']
    },
    token: {
        type: String
    }
}, { timestamps: true })

export const Admin = mongoose.model('Admin', adminSchema)