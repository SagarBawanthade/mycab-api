import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
    userId: String, // In a real application, you might have a User model and reference it here
    startDate: Date,
    endDate: Date,
    totalCost: Number,
    status: String, // e.g., 'confirmed', 'pending', 'canceled'
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
