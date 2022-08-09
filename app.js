const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./utils/config");
const scoreboardRouter = require("./controllers/scoreboards");

mongoose
  .connect(config.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));

app.use(express.json());
app.use("/api/scoreboard", scoreboardRouter);
module.exports = app;
