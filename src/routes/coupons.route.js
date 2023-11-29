const express = require("express");
const { createCoupon } = require("../controllers/coupons/create.controller");
const { getAllCoupons } = require("../controllers/coupons/getAll.controller");
const { updateCoupon } = require("../controllers/coupons/update.controller");
const { deleteCoupon } = require("../controllers/coupons/delete.controller");
const verifyToken = require("../middlewares/verifyToken");
const verifyAdmin = require("../middlewares/verifyAdmin");
const router = express.Router();

// controllers

router.post("/create", verifyToken, verifyAdmin, createCoupon);
router.get("/get-all", verifyToken, verifyAdmin, getAllCoupons);
router.patch("/update/:id", verifyToken, verifyAdmin, updateCoupon);
router.delete("/delete/:id", verifyToken, verifyAdmin, deleteCoupon);

// TODO: create a api to check available with coupon code

module.exports = router;
