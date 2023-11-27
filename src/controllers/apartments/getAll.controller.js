// const getAllApartments = async (req, res) => {};

const Apartment = require("../../models/apartment.model");

const getAllApartments = async (req, res) => {
  try {
    const apartments = await Apartment.find();
    res.status(200).json(apartments);
  } catch (error) {
    console.error("Error getting getAllApartments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllApartments };
