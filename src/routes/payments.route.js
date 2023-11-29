const express = require("express");
const { paymentIntent } = require("../controllers/payments/intent.controller");
const router = express.Router();

// controllers

// routers
router.post("/intent", paymentIntent);

module.exports = router;
