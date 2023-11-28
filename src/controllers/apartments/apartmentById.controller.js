const Apartment = require("../../models/apartment.model");

const getApartmentById = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Apartment.findOne({ _id: id });

    res.status(200).json(result);
  } catch (error) {
    console.error("Error getting getApartmentById:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getApartmentById };
