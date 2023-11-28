const Member = require("../../models/member.model");

const memberDetails = async (req, res) => {
  try {
    const email = req.query.email;

    const memberDetails = await Member.findOne({ email });

    res.status(200).json(memberDetails);
  } catch (error) {
    console.error("Error getting memberDetails:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { memberDetails };
