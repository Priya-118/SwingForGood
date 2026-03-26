const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  getProfile,
  updateCharity,
  updateSubscription
} = require("../controllers/userController");

router.get("/profile", authMiddleware, getProfile);
router.put("/charity", authMiddleware, updateCharity);
router.put("/subscription", authMiddleware, updateSubscription);

module.exports = router;