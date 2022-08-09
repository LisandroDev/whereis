import { useState } from "react";

export default function useGetScore() {
  const [initialTimeStamp, setInitialTimeStamp] = useState();

  function recordTimestamp() {
    setInitialTimeStamp(Math.floor(Date.now() / 1000));
  }

  function getScore() {
    const score = Math.floor(Date.now() / 1000);
    return score - initialTimeStamp;
  }

  return { recordTimestamp, getScore };
}
