const scoreboardRouter = require("express").Router()
const Score = require('../models/score')

scoreboardRouter.post('/', async (request, response) => {
    try{
        const body = request.body
        const newScore = new Score({
            name: body.name,
            rawScore: body.rawScore,
            scoreString: body.scoreString
        })
        await newScore.save()
        response.status(201).json(newScore)
    }catch(exception){
        response.status(400)
    }

})

scoreboardRouter.get('/', async (request, response) => {
    try{
    const scores = await Score.find().sort({rawScore: 'desc'}).limit(10)
    response.status(200).json(scores)} catch(exception){
        response.status(400)
    }
})

module.exports = scoreboardRouter