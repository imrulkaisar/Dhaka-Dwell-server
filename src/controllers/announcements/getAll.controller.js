const Announcement = require("../../models/announcement.model");

const getAllAnnouncement = async (req, res) => {
  try {
    const result = await Announcement.find();

    res.status(200).json(result);
  } catch (error) {
    console.error("Error getting getAllAnnouncement:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllAnnouncement };
