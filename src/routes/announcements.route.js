const express = require("express");
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
const router = express.Router();

// controllers

// create a new announcement
router.post("/create", createAnnouncement);
router.get("/get-all", getAllAnnouncement);
router.patch("/make-as-read/:id", markAsRead);
router.delete("/delete/:id", deleteAnnouncement);

module.exports = router;
