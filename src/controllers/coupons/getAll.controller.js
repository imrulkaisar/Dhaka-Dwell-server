const Coupon = require("../../models/coupon.model");

const getAllCoupons = async (req, res) => {
  try {
    const result = await Coupon.find();

    res.status(200).json(result);
  } catch (error) {
    console.error("Error getting getAllCoupons:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllCoupons };
