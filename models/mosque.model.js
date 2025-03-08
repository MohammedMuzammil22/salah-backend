import mongoose from "mongoose";

const mosqueSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Mosque name is required'],
        minLength:3,
        maxLength:60,
    },
    address: {
        type:String,
        required:[true, 'Mosque address is required'],
        minLength:3,
        maxLength:150,
    },
    createdBy:{
        type:Number,
        required:[true, 'CreatedBy Id is required'],
    }
}, {timestamps: true})

const Mosque = mongoose.model('Mosque', mosqueSchema)

export default Mosque;