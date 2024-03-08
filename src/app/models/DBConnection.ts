import mongoose from "mongoose";

export const DBConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log('MongoDB Connected!')
        return true
    } catch (error) {
        console.log(error)
        throw error
    }
}