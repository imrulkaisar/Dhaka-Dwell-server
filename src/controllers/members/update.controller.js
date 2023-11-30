const Member = require("../../models/member.model");

const updateMember = async (req, res) => {
  try {
    const memberId = req.params.id;
    const newData = req.body;

    const updatedMember = await Member.findByIdAndUpdate(memberId, newData, {
      new: true,
    });

    if (!updatedMember) {
      return res
        .status(404)
        .json({ success: false, message: "Member not found." });
    }

    res.status(201).json({ success: true, updateMember });
  } catch (error) {
    console.error("Error getting updateMember:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { updateMember };
