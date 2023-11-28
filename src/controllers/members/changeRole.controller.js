const Member = require("../../models/member.model");

const changeMemberRole = async (req, res) => {
  try {
    const memberId = req.params.id;
    const { userRole } = req.body;

    const updatedMember = await Member.findByIdAndUpdate(
      memberId,
      { role: userRole },
      { new: true }
    );

    if (!updatedMember) {
      return res
        .status(404)
        .json({ success: false, error: "Member not found" });
    }

    res.status(200).json({ success: true, updatedMember });
  } catch (error) {
    console.error("Error getting changeMemberRole:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { changeMemberRole };
