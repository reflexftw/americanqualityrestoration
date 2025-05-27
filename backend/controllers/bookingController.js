import dotenv from "dotenv"
dotenv.config()
import booking from "../models/booking.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASS,
  },
  debug: true,
});
export const bookService = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, service, message, serviceDate } = req.body;

    const book = await booking.create({
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
    });
    res.status(200).json({
      message: {
        book,
      },
    });

    try {
        transporter.sendMail({
          from: process.env.APP_EMAIL,
          to: email,
          subject: "Booking Confirmation",
          html: `<p>Hi ${firstName},</p><p>Your roofing service has been successfully booked for <strong>${new Date(
            serviceDate
          ).toDateString()}</strong>.</p><p>We will contact you soon.</p><p>Best regards,<br>American Quality Restoration</p>`,
        });
    } catch (error) {
        console.error(error)
    }
  } catch (error) {
    res.json({ message: "Failed to book service" });
  }
};
