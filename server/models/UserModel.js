import mongoose from "mongoose";

// create a user schema
const userSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }

})

// Create UserModel
const User =mongoose.model('User',userSchema)
export default User;