const authMiddleware = require("../middleware/authMiddleware");

router.get("/me", authMiddleware, (req, res) => {
  res.json({ message: "Protected route accessed", user: req.user });
});