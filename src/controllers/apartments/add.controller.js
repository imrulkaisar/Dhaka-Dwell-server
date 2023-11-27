const Apartment = require("../../models/apartment.model");

const addApartment = async (req, res) => {
  try {
    const newApartment = new Apartment(req.body);
    const savedApartment = await newApartment.save();

    res.status(201).json(savedApartment);
  } catch (error) {
    console.error("Error getting addApartment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addApartment };
