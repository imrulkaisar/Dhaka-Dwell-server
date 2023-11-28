const changeMemberRole = async (req, res) => {
  try {
    //
  } catch (error) {
    console.error("Error getting changeMemberRole:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { changeMemberRole };
