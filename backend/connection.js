import mongoose from "mongoose"

export const connectDb =async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        if (conn) {
            console.log("Database connected successfully")
        }
    } catch (error) {
        console.error("Failed to connect db", error)
    }
}