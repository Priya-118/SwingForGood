const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const { runDraw } = require("../controllers/drawController");

router.get("/run", authMiddleware, runDraw);

module.exports = router;