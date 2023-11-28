const Member = require("../../models/member.model");

const getMemberById = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Member.findOne({ _id: id });

    res.status(200).json(result);
  } catch (error) {
    console.error("Error getting getMemberById:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getMemberById };
