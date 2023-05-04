import mongoose from 'mongoose'

const connectDB = async (server) => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`connected to mongodb...`)
        server()
    } catch (err) {
        console.log(err)
    }
}

export default connectDB