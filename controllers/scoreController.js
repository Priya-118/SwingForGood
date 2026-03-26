const User = require("../models/user");

// ADD SCORE
exports.addScore = async (req, res) => {
  try {
    const userId = req.user.id;
    const { value } = req.body;

    if (!value || isNaN(value)) {
      return res.status(400).json({ message: "Invalid score" });
    }

    if (value < 1 || value > 45) {
      return res.status(400).json({ message: "Score must be between 1-45" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.scores) {
      user.scores = [];
    }

    user.scores.push({ value });

    if (user.scores.length > 5) {
      user.scores.shift();
    }

    await user.save();

    res.json({ message: "Score added", scores: user.scores });

  } catch (err) {
    console.log("ERROR:", err); // 👈 IMPORTANT
    res.status(500).json({ error: err.message });
  }
};


// GET SCORES
exports.getScores = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    // latest first
    const scores = user.scores.sort((a, b) => b.date - a.date);

    res.json(scores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};