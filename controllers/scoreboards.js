const scoreboardRouter = require("express").Router()
const Score = require('../models/score')

scoreboardRouter.post('/', async (request, response) => {
    const body = request.body
    const newScore = new Score({
        name: body.name,
        rawScore: body.rawScore,
        score: body.score
    })
    await newScore.save()
    response.status(201).json(newScore)
})

module.exports = scoreboardRouter