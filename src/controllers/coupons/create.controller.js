const Coupon = require("../../models/coupon.model");

const createCoupon = async (req, res) => {
  try {
    const newCoupon = new Coupon(req.body);

    const addedCoupon = await newCoupon.save();

    res.status(201).json({ success: true, addedCoupon });
  } catch (error) {
    console.error("Error getting createCoupon:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createCoupon };
