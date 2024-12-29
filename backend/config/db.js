import mongoose from "mongoose";
// require('dotenv').config();

export const connectDB = async () => {

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/FoodDeliveryDatabase");
        console.log("Database connection successfully!");
    } catch (error) {
        console.log("Database connection error: ", error.message);
    }
}