const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET; // ✅ Use the correct environment variable

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access Denied: No Token Provided",
    });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message); // ✅ Log error for debugging
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token. Please log in again.",
    });
  }
};

module.exports = fetchuser;
