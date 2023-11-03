import mongoose, { Schema } from "mongoose";

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Test = mongoose.models || mongoose.model("Test", ticketSchema);

export default Test;
