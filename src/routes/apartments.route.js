const express = require("express");
const router = express.Router();

const {
  getAllApartments,
} = require("../controllers/apartments/getAll.controller");
const { addApartment } = require("../controllers/apartments/add.controller");
const {
  getApartmentById,
} = require("../controllers/apartments/apartmentById.controller");
const {
  getTotalApartmentNum,
} = require("../controllers/apartments/totalCount.controller");

// middlewares
const verifyToken = require("../middlewares/verifyToken");
const verifyAdmin = require("../middlewares/verifyAdmin");

// get all apartments
router.get("/get-all", getAllApartments);
router.get("/get-apartment-by-id/:id", getApartmentById);
router.get("/total", getTotalApartmentNum);
router.post("/add", verifyToken, verifyAdmin, addApartment);

module.exports = router;
