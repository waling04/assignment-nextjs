import mongoose from 'mongoose'

export const connect = async () => {
  // if (mongoose.connection.readyState) return;
  try {
    await mongoose.connect(process.env.MONGO_URI!)
    console.log('MongoDB Connected!')
  } catch (error) {
    throw new Error('Something goes wrong')
  }
}
