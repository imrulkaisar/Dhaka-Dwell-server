const express = require("express");
const { paymentIntent } = require("../controllers/payments/intent.controller");
const verifyToken = require("../middlewares/verifyToken");
const {
  createNewPayment,
} = require("../controllers/payments/create.controller");
const {
  getPaymentHistory,
} = require("../controllers/payments/getHistory.controller");
const verifyAdmin = require("../middlewares/verifyAdmin");
const { updatePayment } = require("../controllers/payments/update");
const router = express.Router();

// controllers

// routers
router.post("/intent", verifyToken, paymentIntent);
router.post("/create", verifyToken, createNewPayment);
router.get("/get-history", verifyToken, getPaymentHistory);
router.patch("/update/:id", verifyToken, verifyAdmin, updatePayment);

module.exports = router;
