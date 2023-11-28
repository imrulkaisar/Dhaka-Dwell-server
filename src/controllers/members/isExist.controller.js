const Member = require("../../models/member.model");

const isMemberExist = async (req, res) => {
  try {
    const email = req.query.email;

    const existingMember = await Member.findOne({ email });

    if (existingMember) {
      return res.json({ exists: true, existingMember });
    }

    res.json({ exists: false });
  } catch (error) {
    console.error("Error getting isMemberExist:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { isMemberExist };
