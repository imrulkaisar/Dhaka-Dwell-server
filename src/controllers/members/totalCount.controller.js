const Member = require("../../models/member.model");

const getTotalMemberNumber = async (req, res) => {
  try {
    const query = req.query;

    const totalNumber = await Member.countDocuments(query);

    res.status(200).json({ total: totalNumber });
  } catch (error) {
    console.error("Error getting getTotalMemberNumber:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getTotalMemberNumber };
