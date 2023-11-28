const express = require("express");
const { createCoupon } = require("../controllers/coupons/create.controller");
const { getAllCoupons } = require("../controllers/coupons/getAll.controller");
const { updateCoupon } = require("../controllers/coupons/update.controller");
const { deleteCoupon } = require("../controllers/coupons/delete.controller");
const router = express.Router();

// controllers

router.post("/create", createCoupon);
router.get("/get-all", getAllCoupons);
router.patch("/update/:id", updateCoupon);
router.delete("/delete/:id", deleteCoupon);

module.exports = router;
