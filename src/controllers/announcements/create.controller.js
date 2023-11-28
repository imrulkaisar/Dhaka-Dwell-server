const Announcement = require("../../models/announcement.model");

const createAnnouncement = async (req, res) => {
  try {
    const newAnnouncement = new Announcement(req.body);
    const addedAnnouncement = await newAnnouncement.save();

    res.status(201).json({ success: true, addedAnnouncement });
  } catch (error) {
    console.error("Error getting createAnnouncement:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createAnnouncement };
