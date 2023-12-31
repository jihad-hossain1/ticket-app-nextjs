import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;
console.log("connection successfull");

// const connectMongoDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("connect to mongodb successfull");
//   } catch (error) {
//     console.log("connection err:", error);
//   }
// };

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    categroy: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models || mongoose.model("Ticket", ticketSchema);

export default Ticket;
