const Coupon = require("../../models/coupon.model");

const deleteCoupon = async (req, res) => {
  try {
    const couponId = req.params.id;

    const deletedCoupon = await Coupon.findByIdAndDelete(couponId);

    if (!deletedCoupon) {
      return res
        .status(404)
        .json({ success: false, message: "Coupon not found!" });
    }

    res.status(200).json({ success: true, deletedCoupon });
  } catch (error) {
    console.error("Error getting deleteCoupon:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { deleteCoupon };
