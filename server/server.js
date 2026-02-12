import express from 'express'
import cors from "cors"
import 'dotenv/config'
import connectDB from './config/db.js'
import userRouter from './routes/userRoute.js'

// Connect to database
await connectDB()

// Initialize Express
const app = express()

// Middlewares
app.use(cors())
app.use(express.json()) //body parser we never get the response will be passed using json method

// API endpoints 
app.use('/api/user',userRouter)

// Routes
app.get('/',(req,res)=>res.send("API working"))

// Port
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

