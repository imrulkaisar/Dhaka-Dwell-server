const Agreement = require("../../models/agreement.model");

const getAllAgreement = async (req, res) => {
  try {
    const result = await Agreement.find();

    res.status(200).json(result);
  } catch (error) {
    console.error("Error getting getAllAgreement:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllAgreement };
