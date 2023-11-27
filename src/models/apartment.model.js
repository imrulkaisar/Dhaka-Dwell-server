const mongoose = require("mongoose");

// Define the schema
const apartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
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
  number: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  facilities: {
    rooms: {
      type: Number,
      required: true,
    },
    kitchen: {
      type: Number,
      required: true,
    },
    toilets: {
      common: {
        type: Number,
        required: function () {
          return (
            this.facilities &&
            this.facilities.toilets &&
            this.facilities.toilets.common !== undefined
          );
        },
      },
      attached: {
        type: Number,
        required: function () {
          return (
            this.facilities &&
            this.facilities.toilets &&
            this.facilities.toilets.attached !== undefined
          );
        },
      },
    },
    gasFacilities: {
      available: {
        type: Boolean,
        required: function () {
          return (
            this.facilities &&
            this.facilities.gasFacilities &&
            this.facilities.gasFacilities.available !== undefined
          );
        },
      },
      type: {
        type: String,
        required: function () {
          return (
            this.facilities &&
            this.facilities.gasFacilities &&
            this.facilities.gasFacilities.available &&
            this.facilities.gasFacilities.type !== undefined
          );
        },
      },
    },
    waterFacilities: {
      type: Boolean,
      required: true,
    },
    balconies: {
      type: Number,
      required: true,
    },
  },
  rent: {
    type: Number,
    required: true,
  },
});

// Create a Mongoose model
const Apartment = mongoose.model("Apartment", apartmentSchema);

// Export the model
module.exports = Apartment;
