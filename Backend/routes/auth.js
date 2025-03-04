const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const User = require("../models/Users");
const fetchuser = require("../middleware/fetchuser");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET; // ✅ Changed from JWT_SIGNATURE

// ROUTE 1: Create a User (POST "/api/auth/createuser") - No Login Required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({ min: 5 }),
    body("cpassword", "Password must be at least 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ success, message: "Enter Correct Credentials", errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) return res.status(400).json({ success, message: "Email is already registered" });

      if (req.body.password !== req.body.cpassword) {
        return res.status(400).json({ success, message: "Passwords do not match" });
      }

      const salt = await bcrypt.genSalt(10);
      const securePass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePass,
      });

      const data = { user: { id: user.id } };
      const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: "7d" }); // ✅ Set token expiry

      success = true;
      return res.json({ success, message: "User Registered Successfully", authToken });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ success, message: "Internal Server Error", errors: error.message });
    }
  }
);

// ROUTE 2: Authenticate a User (POST "/api/auth/login") - No Login Required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ success, message: "Enter Correct Credentials", errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ success, message: "Invalid credentials" });

      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) return res.status(400).json({ success, message: "Invalid credentials" });

      const data = { user: { id: user.id } };
      const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: "7d" });

      success = true;
      res.json({ success, message: "User Logged In Successfully", authToken, user });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ success, message: "Internal Server Error", errors: error.message });
    }
  }
);

// ROUTE 3: Get logged-in user details (POST "/api/auth/getuser") - Login Required
router.post("/getuser", fetchuser, async (req, res) => {
  let success = false;
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");

    success = true;
    return res.json({ success, message: "User Data fetched successfully", user });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success, message: "Internal Server Error", errors: error.message });
  }
});

module.exports = router;
