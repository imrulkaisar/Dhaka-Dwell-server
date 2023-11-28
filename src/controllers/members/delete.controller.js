const Member = require("../../models/member.model");

const deleteMember = async (req, res) => {
  try {
    const memberId = req.query.id;

    const deletedMember = await Member.findByIdAndDelete(memberId);

    if (deleteMember) {
      return res.status(200).json({ success: true, deleteMember });
    }

    res.status(404).json({ success: false, message: "Member not found" });
  } catch (error) {
    console.error("Error getting deleteMember:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { deleteMember };
