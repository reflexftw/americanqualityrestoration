import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },

    email: { type: String, required: true },
    phone: { type: String, required: true },
    service: { type: String, required: true },
    message: { type: String, required: true },
    //   serviceDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const booking = new mongoose.model("Booking", bookingSchema)

export default booking