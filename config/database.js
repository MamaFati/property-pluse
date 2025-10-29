import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set("strictQuery", true);
    // if the database is connected, don't connect again
    if(connected){
        console.log("Database is already connected");
        return;
    }
    // connect to the database
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        connected = true;
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;