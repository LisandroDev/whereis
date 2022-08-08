import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  doc,
  query,
  collection,
  orderBy,
  limit,
  getDocs
} from "firebase/firestore";

//  initializeApp({
//   authDomain: "whereis-c254a.firebaseapp.com",
//   projectId: "whereis-c254a",
// });

// const db = getFirestore();

export default function useFirestore() {
  // async function fetchCoords(id) {
  //   const docRef = doc(db, "charactersCoords", id);
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     return docSnap.data();
  //   } else {
  //     return null;
  //   }
  // }

  // async function fetchScoreboard() {
  //   const scoreboardItems = collection(db, "scoreboard");
  //   const items = query(scoreboardItems, orderBy("rawScore"), limit(10));
  //   const querySnapshot = await getDocs(items);
  //   const itemContainer = [];
  //   querySnapshot.forEach((doc) => {
  //     itemContainer.push(doc.data())
  //   });
  //   console.log("I fetch scoreboard!")
  //   return itemContainer;
  // }



  // return { fetchCoords, fetchScoreboard };
}
