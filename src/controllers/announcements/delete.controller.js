const Announcement = require("../../models/announcement.model");

const deleteAnnouncement = async (req, res) => {
  try {
    const announcementId = req.params.id;

    const deletedAnnouncement = await Announcement.findByIdAndDelete(
      announcementId
    );

    if (!deleteAnnouncement) {
      return res
        .status(404)
        .json({ success: false, message: "Announcement not found!" });
    }

    res.status(200).json({ success: true, deleteAnnouncement });
  } catch (error) {
    console.error("Error getting deleteAnnouncement:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { deleteAnnouncement };
