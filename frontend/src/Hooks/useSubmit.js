import apiService from "../Services/ApiService";

export default function useSubmit() {

  const { submitToScoreboard } = apiService

  function secondsFormat(scoreInSeconds) {
    const minutes = Math.floor(scoreInSeconds / 60);
    const seconds = scoreInSeconds - minutes * 60;
    return `${minutes}:${seconds}`;
  }


  async function pushToScoreboard(name,score) {
    
    submitToScoreboard(name,score,secondsFormat(score))
  }
  return { pushToScoreboard, secondsFormat };
}
