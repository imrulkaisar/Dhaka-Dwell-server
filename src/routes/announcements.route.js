const express = require("express");
const router = express.Router();

// controllers
const {
  createAnnouncement,
} = require("../controllers/announcements/create.controller");
const {
  getAllAnnouncement,
} = require("../controllers/announcements/getAll.controller");
const {
  markAsRead,
} = require("../controllers/announcements/markAsRead.controller");
const {
  deleteAnnouncement,
} = require("../controllers/announcements/delete.controller");

// middlewares
const verifyToken = require("../middlewares/verifyToken");
const verifyAdmin = require("../middlewares/verifyAdmin");

// create a new announcement
router.post("/create", verifyToken, verifyAdmin, createAnnouncement);
router.get("/get-all", verifyToken, getAllAnnouncement);
router.patch("/make-as-read/:id", verifyToken, markAsRead);
router.delete("/delete/:id", verifyToken, verifyAdmin, deleteAnnouncement);

module.exports = router;
