const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  name: {type: String, min:4 , max: 10, required: true},
  rawScore: {type: Number, required: true},
  scoreString: {type: String, required: true},
});

scoreSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
