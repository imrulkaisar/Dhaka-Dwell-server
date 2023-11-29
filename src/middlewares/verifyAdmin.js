const Member = require("../models/member.model");

// use verify admin after verifyToken
const verifyAdmin = async (req, res, next) => {
  const email = req.user.email;
  const query = { email };
  const user = await Member.findOne(query);
  const isAdmin = user?.role === "admin";
  if (!isAdmin) {
    return res.status(403).send({ message: "forbidden access" });
  }
  next();
};

module.exports = verifyAdmin;
