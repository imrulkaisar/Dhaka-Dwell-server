const mongoose = require("mongoose");

const agreementSchema = new mongoose.Schema({
  apartmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Apartment",
    required: true,
  },
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "done"],
    default: "pending",
  },
  submittedDate: {
    type: Date,
    default: Date.now,
  },
  agreementDate: {
    type: Date,
    required: false,
    default: null,
  },
  startFrom: {
    type: Date,
    // default: function () {
    //   const nextMonth = new Date();
    //   nextMonth.setMonth(nextMonth.getMonth() + 1);
    //   nextMonth.setDate(1);
    //   return nextMonth;
    // },
  },
});

const Agreement = mongoose.model("Agreement", agreementSchema);

module.exports = Agreement;
