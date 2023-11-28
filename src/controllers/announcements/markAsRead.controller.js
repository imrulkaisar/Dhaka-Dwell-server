const Announcement = require("../../models/announcement.model");

const markAsRead = async (req, res) => {
  try {
    const announcementId = req.params.id;
    const memberId = req.body.memberId;

    const announcement = await Announcement.findById(announcementId);

    if (!announcement) {
      return res
        .status(404)
        .json({ success: false, message: "Announcement not found." });
    }

    announcement.seenby.push(memberId);

    const updateAnnouncement = await Announcement.save();

    res.status(200).json({ success: true, updateAnnouncement });
  } catch (error) {
    console.error("Error getting markAsRead:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { markAsRead };
