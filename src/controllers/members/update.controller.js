const updateMember = async (req, res) => {
  try {
    //
  } catch (error) {
    console.error("Error getting updateMember:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { updateMember };
