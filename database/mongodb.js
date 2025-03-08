import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
    throw new Error("Please define mongodb environment variable inside .env.<production/development>.local")
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to the database in ${NODE_ENV} mode`);
    } catch (error) {
        console.log("Error connecting to the Database");
        process.exit(1)
    }
}

export default connectToDatabase;