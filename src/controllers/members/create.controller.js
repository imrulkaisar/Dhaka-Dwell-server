const Member = require("../../models/member.model");

const createMember = async (req, res) => {
  try {
    const newMember = new Member(req.body);
    const savedMember = await newMember.save();

    res.status(201).json(savedMember);
  } catch (error) {
    console.error("Error getting createMember:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createMember };
