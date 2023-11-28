const Coupon = require("../../models/coupon.model");

const updateCoupon = async (req, res) => {
  try {
    const couponId = req.params.id;
    const updateData = req.body;

    const updatedCoupon = await Coupon.findByIdAndUpdate(couponId, updateData, {
      new: true,
    });

    if (!updateCoupon) {
      return res
        .status(404)
        .json({ success: false, message: "Coupon not found!" });
    }

    res.status(200).json({ success: true, updatedCoupon });
  } catch (error) {
    console.error("Error getting updateCoupon:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { updateCoupon };
