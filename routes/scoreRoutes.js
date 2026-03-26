const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const { addScore, getScores } = require("../controllers/scoreController");

router.post("/add", authMiddleware, addScore);
router.get("/", authMiddleware, getScores);

module.exports = router;