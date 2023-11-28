const Agreement = require("../../models/agreement.model");

const updateAgreementStatus = async (req, res) => {
  try {
    const agreementId = req.params.id;

    const updatedAgreement = await Agreement.findByIdAndUpdate(
      agreementId,
      {
        status: "accepted",
      },
      { new: true }
    );

    if (!updatedAgreement) {
      return res
        .status(404)
        .json({ success: false, error: "Agreement not found" });
    }

    res.status(200).json({ success: true, updatedAgreement });
    
  } catch (error) {
    console.error("Error getting updateAgreementStatus:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { updateAgreementStatus };
