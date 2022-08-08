import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export default function useSubmit() {
  // initializeApp({
  //   authDomain: "whereis-c254a.firebaseapp.com",
  //   projectId: "whereis-c254a",
  // });

  // const db = getFirestore();

  // function secondsFormat(scoreInSeconds) {
  //   const minutes = Math.floor(scoreInSeconds / 60);
  //   const seconds = scoreInSeconds - minutes * 60;
  //   return `${minutes}:${seconds}`;
  // }


  // async function pushToScoreboard(name,score) {
    
    
  //   const docRef = await addDoc(collection(db, "scoreboard"), {
  //     name: name,
  //     rawScore: score,
  //     score: secondsFormat(score),
  //   });
  //   console.log("Document written with ID: ", docRef.id);

  // }
  // return { pushToScoreboard, secondsFormat };
}
