const express = require("express");
const router = express.Router();
// const verifyToken = require("../middlewares/verifyToken");

const {
  getAllApartments,
} = require("../controllers/apartments/getAll.controller");
const { addApartment } = require("../controllers/apartments/add.controller");

// get all apartments
router.get("/get-all", getAllApartments);
router.post("/add", addApartment);

module.exports = router;
