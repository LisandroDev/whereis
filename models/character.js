const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: String,
  coords: { maxX: Number, maxY: Number, minX: Number, minY: Number },
});

characterSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
