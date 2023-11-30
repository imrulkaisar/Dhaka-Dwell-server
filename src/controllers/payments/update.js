const Payment = require("../../models/payment.model");

const updatePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const newData = req.body;

    const updatedPayment = await Payment.findByIdAndUpdate(paymentId, newData, {
      new: true,
    });

    if (!updatedPayment) {
      return res
        .status(404)
        .json({ success: false, error: "Payment not found" });
    }

    res.status(200).json({ success: true, updatedPayment });
  } catch (error) {
    console.error("Error getting updatePayment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { updatePayment };
