const mongoose = require("mongoose");

const scoreSchema= new mongoose.Schema({
  value:{
    type:Number,
    min:1,
    max:45, 
  },
  date:{
    type:Date,
    default:Date.now,
  },
});

const userSchema = new mongoose.Schema({
  name:String,
  email:{
    type:String,
    unique:true,
  },
  password:String,
  subscriptionType: {
    type: String,
    enum: ["monthly", "yearly"],
    default: "monthly"
  },

  charity: {
    type: String
  },
  
  charityPercentage: {
  type: Number,
  default: 10
},

  scores: [scoreSchema]
}, { timestamps: true });


module.exports = mongoose.model("User", userSchema);