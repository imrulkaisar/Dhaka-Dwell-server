// middleware/verifyToken.js
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.TOKEN_SECRET;

const verifyToken = (req, res, next) => {
  // Get the token from the request header
  const authorizationCode = req.headers.authorization;
  const token = authorizationCode.split(" ")[1];

  // Check if token is present
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, secretKey);

    // Attach the decoded payload to the request for further use
    req.user = decoded;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden: Invalid token", error });
  }
};

module.exports = verifyToken;
