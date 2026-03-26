const User = require("../models/user");

// GENERATE DRAW + MATCH
exports.runDraw = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user.scores || user.scores.length === 0) {
      return res.status(400).json({ message: "No scores available" });
    }

    // Extract score values
    const userScores = user.scores.map(s => s.value);

    // Generate 5 random numbers (1–45)
    const drawNumbers = [];
    while (drawNumbers.length < 5) {
      const num = Math.floor(Math.random() * 45) + 1;
      if (!drawNumbers.includes(num)) {
        drawNumbers.push(num);
      }
    }

    // Find matches
    const matches = userScores.filter(score => drawNumbers.includes(score));

    res.json({
      drawNumbers,
      userScores,
      matches,
      matchCount: matches.length
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};