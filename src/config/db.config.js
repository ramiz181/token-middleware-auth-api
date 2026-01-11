import mongoose from 'mongoose'

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then((e) => {
            console.log(`MongoDB atlas connected: PORT: ${e.connection.port}, name: ${e.connection.name}`);
        })
}