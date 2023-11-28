const Agreement = require("../../models/agreement.model");
const Apartment = require("../../models/apartment.model");
const Member = require("../../models/member.model");

const addAgreementRequest = async (req, res) => {
  try {
    // Check if the apartmentId exists
    const existingApartment = await Apartment.findById(req.body.apartmentId);
    if (!existingApartment) {
      return res
        .status(404)
        .json({ success: false, error: "Apartment not found" });
    }

    const existingMember = await Member.findById(req.body.memberId);
    if (!existingMember) {
      return res
        .status(404)
        .json({ success: false, error: "Member not found" });
    }

    const newRequest = new Agreement(req.body);
    const addedRequest = await newRequest.save();

    const populatedAgreement = await Agreement.findById(addedRequest._id)
      .populate("apartmentId")
      .populate("memberId");

    res.status(201).json({ success: true, addedRequest });
  } catch (error) {
    console.error("Error getting addAgreementRequest:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addAgreementRequest };
