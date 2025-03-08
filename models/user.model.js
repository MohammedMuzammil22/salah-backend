import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'User name is required'],
        minLength: 5,
        maxLength: 50,

    },
    email:{
        type:String,
        required:[true, 'User email is required'],
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
        , 'Please enter a valid email'],
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:[true, 'User password is required'],
        minLength: 8,
    },
    role:{
        type:String,
        enum: ['super-admin', 'admin', 'user'],
        // default:'user',
        required:[true, 'User role is required'],
    }

}, {timestamps:true})

const User = mongoose.model('User', userSchema)
export default User;