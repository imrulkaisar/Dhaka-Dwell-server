const Coupon = require("../../models/coupon.model");

const checkIfCouponAvailable = async (req, res) => {
  try {
    const code = req.params.code;

    const foundCoupon = await Coupon.findOne({ code });

    if (!foundCoupon) {
      return res
        .status(404)
        .json({ success: false, message: "Coupon not valid!" });
    }

    res.status(200).json({ success: true, foundCoupon });
  } catch (error) {
    console.error("Error getting checkIfCouponAvailable:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { checkIfCouponAvailable };
