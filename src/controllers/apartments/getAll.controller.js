// const getAllApartments = async (req, res) => {};

const Apartment = require("../../models/apartment.model");

const getAllApartments = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.size) || 6;

    const skip = (page - 1) * pageSize;

    const apartments = await Apartment.find().skip(skip).limit(pageSize);
    res.status(200).json(apartments);
  } catch (error) {
    console.error("Error getting getAllApartments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllApartments };
