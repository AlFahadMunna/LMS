import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDB connected");
  } catch (error) {
    console.log("DB connection error", error);
  }
};

export default connectDB;
