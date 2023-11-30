const Member = require("../../models/member.model");

const getAllMembers = async (req, res) => {
  try {
    const query = req.query;
    const result = await Member.find(query);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error getting getAllMembers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllMembers };
