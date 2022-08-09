const charactersRouter = require("express").Router();
const Character = require("../models/character");

charactersRouter.get("/:name", async (request, response) => {
  try {
    const characterCoords = await Character.findOne({
      name: request.params.name,
    });
    response.status(200).json(characterCoords);
  } catch (exception) {
    response.status(400);
  }
});

module.exports = charactersRouter;
