const Payment = require("../../models/payment.model");

const getPaymentHistory = async (req, res) => {
  try {
    const query = req.query;

    const result = await Payment.find(query);

    res.status(200).json(result);
  } catch (error) {
    console.error("Error getting getPaymentHistory:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getPaymentHistory };
