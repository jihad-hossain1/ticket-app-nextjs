import mongoose, { Schema } from "mongoose";

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
