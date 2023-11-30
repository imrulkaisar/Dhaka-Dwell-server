const Payment = require("../../models/payment.model");

const createNewPayment = async (req, res) => {
  try {
    const newPayment = new Payment(req.body);
    const addedPayment = await newPayment.save();

    console.log(req.body);
    console.log("Payment Created:", addedPayment);

    res.status(201).json({ success: true, addedPayment });
  } catch (error) {
    console.error("Error getting createNewPayment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createNewPayment };
