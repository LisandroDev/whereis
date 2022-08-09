const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  name: String,
  rawScore: Number,
  score: Number,
});

scoreSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
