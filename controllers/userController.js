const User = require("../models/user");

// GET USER PROFILE (Dashboard)
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// UPDATE CHARITY
exports.updateCharity = async (req, res) => {
  try {
    const { charity, percentage } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        charity,
        charityPercentage: percentage
      },
      { new: true }
    ).select("-password");

    res.json({ message: "Charity updated", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// UPDATE SUBSCRIPTION
exports.updateSubscription = async (req, res) => {
  try {
    const { subscriptionType } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { subscriptionType },
      { new: true }
    ).select("-password");

    res.json({ message: "Subscription updated", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};