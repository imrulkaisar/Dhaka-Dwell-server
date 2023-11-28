const Agreement = require("../../models/agreement.model");

const deleteAgreementById = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedAgreement = await Agreement.findByIdAndDelete(id);

    if (deletedAgreement) {
      return res.status(200).json({ success: true, deletedAgreement });
    }

    res.status(404).json({ success: false, message: "Agreement not found" });
  } catch (error) {
    console.error("Error getting deleteAgreementById:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { deleteAgreementById };
