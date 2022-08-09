const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./utils/config");
const scoreboardRouter = require("./controllers/scoreboards");
const charactersRouter = require("./controllers/characters");
const cors = require('cors')

mongoose
  .connect(config.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));

app.use(express.json());
// app.use((request, response, next) => {
//   const apiKey = request.get("x-api-key");
//   if (!apiKey || apiKey !== config.SERVER_APIKEY) {
//     response.status(401).json({ error: "unauthorized" });
//   } else {
//     next();
//   }
// });
app.use(express.static('build'))
app.use(cors())
app.use("/api/scoreboard", scoreboardRouter);
app.use("/api/characters", charactersRouter)
module.exports = app;
