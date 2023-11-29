const Apartment = require("../../models/apartment.model");

const getTotalApartmentNum = async (req, res) => {
  try {
    const total = await Apartment.countDocuments();

    res.status(200).json({ total });
  } catch (error) {
    console.error("Error getting getTotalApartmentNum:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getTotalApartmentNum };
