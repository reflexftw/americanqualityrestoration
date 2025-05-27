import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import { connectDb } from "./connection.js"
import bookingRoutes from "./routes/bookingRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())
connectDb()

app.use("/book", bookingRoutes)
app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`)
})

