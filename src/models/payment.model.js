const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  memberId: {
    type: String,
    ref: "Member",
    required: true,
  },
  memberName: {
    type: String,
    required: true,
  },
  memberEmail: {
    type: String,
    required: true,
  },
  apartmentId: {
    type: String,
    ref: "Apartment",
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  block: {
    type: String,
    required: true,
  },
  apartmentNo: {
    type: Number,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "successful", "denied"],
    default: "pending",
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
