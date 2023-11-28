const mongoose = require("mongoose");

// Define the schema
const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure unique email addresses
  },
  image: {
    type: String,
    default: "https://tinyurl.com/yckdhnx3",
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ["user", "member", "admin"],
    default: "user",
  },
  agreementDate: {
    type: Date,
  },
  apartmentIds: {
    type: [mongoose.Schema.Types.ObjectId], // Array of ObjectIds referencing apartments
    default: [],
  },
});

// Create a Mongoose model
const Member = mongoose.model("Member", memberSchema);

// Export the model
module.exports = Member;
