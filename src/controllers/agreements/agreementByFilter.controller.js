const Agreement = require("../../models/agreement.model");

const agreementByFilter = async (req, res) => {
  try {
    const query = req.query;

    const agreements = await Agreement.find(query);

    res.status(200).json(agreements);
  } catch (error) {
    console.error("Error getting agreementByFilter:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { agreementByFilter };
