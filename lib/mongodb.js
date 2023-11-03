import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connect test mongodb successfull");
  } catch (error) {
    console.log("connection err:", error);
  }
};

export default connectMongoDB;
