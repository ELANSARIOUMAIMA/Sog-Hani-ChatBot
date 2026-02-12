import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDB=async()=>{
    mongoose.connection.on("connected",()=>console.log("Database Connected"))

    await mongoose.connect(`${process.env.MONGODB_URI}/sog-hani`)
    // in the first we don't see the database of sog-hani because we are not add some data inside it 
    //A database appears in Atlas/Compass only when it has data inside it.


}
export default connectDB