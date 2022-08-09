import axios from 'axios'

const url =  ''

const fetchCoords = async (characterName) => {
    const response = await axios.get(`${url}/api/characters/${characterName}`)
    return response.data
}

const fetchScoreboard = async () => {
    const response = await axios.get(`${url}/api/scoreboard`)
    return response.data
}

const submitToScoreboard = async (name , score, stringSeconds) => {
    const response = await axios.post(`${url}/api/scoreboard`,{
            name: name,
            rawScore: score,
            scoreString: stringSeconds,
          })
    return response
}

const apiService = { fetchCoords , fetchScoreboard, submitToScoreboard}

export default apiService