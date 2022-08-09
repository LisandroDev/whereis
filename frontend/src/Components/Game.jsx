import { useEffect, useState } from "react";
import whereisimage from "../Images/find_characters_image.jpg";
import Cursor from "./Cursor";
import ContextMenu from "./ContextMenu";
import Submit from "./Submit";
import { toast } from "react-toastify";
import Button from "./StartButton";
import apiService from "../Services/ApiService";
import useGetScore from "../Hooks/useGetScore";

function Game(props) {
  const [mouseCoords, setmouseCoords] = useState({ x: 0, y: 0 });
  const [contextMenuCoords, setcontextMenuCoords] = useState({ x: 0, y: 0 });
  const [coordsFixedRatio, setcoordsFixedRatio] = useState({ x: 0, y: 0 });
  const [isMenuViewable, setisMenuViewable] = useState(false);
  const [isGameStarted, setisGameStarted] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [characterFound, setcharacterFound] = useState({
    turtle: false,
    bee: false,
    squirrel: false,
  });
  const [score, setScore] = useState(0);
  const { fetchCoords } = apiService
  const { getScore, recordTimestamp } = useGetScore();

  const resImage = { x: 3000, y: 1958 };

  useEffect(() => {
    if (Object.values(characterFound).every(Boolean)) {
      toast.success("YOU WON!");
      handleFinish()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterFound]);

  function handleStart() {
    recordTimestamp();
    setisGameStarted(!isGameStarted);
    props.startTimer();
  }

  function handleFinish(){
    props.pauseTimer();
    setIsGameFinished(!isGameFinished);
    setScore(getScore());
  }

  function onMouseMove(e) {
    setmouseCoords({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }

  function coordsClicked(e) {
    return {
      x: Math.round(
        (resImage.x * e.nativeEvent.offsetX) / e.nativeEvent.target.clientWidth
      ),
      y: Math.round(
        (resImage.y * e.nativeEvent.offsetY) / e.nativeEvent.target.clientHeight
      ),
    };
  }

  function onClickOpenMenu(e) {
    const coords = coordsClicked(e);
    setcoordsFixedRatio(coords);
    setisMenuViewable(!isMenuViewable);
    setcontextMenuCoords({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  }

  function checkForCharacter(dbCoords, characterName) {
    const coords = coordsFixedRatio;
    if (
      coords.x < dbCoords.maxX &&
      coords.x > dbCoords.minX &&
      coords.y < dbCoords.maxY &&
      coords.y > dbCoords.minY
    ) {
      toast.success(`You found ${characterName}`);
      return true;
    }
    toast.error(`Nothing there! Try Again`);
    return false;
  }

  function handleCharacterFound(id) {
    let copiedObject = JSON.parse(JSON.stringify(characterFound));
    copiedObject[id] = true;
    setcharacterFound(copiedObject);
  }

  async function handleOptionChoose(characterName) {
    const characterData = await fetchCoords(characterName);
    setisMenuViewable(!isMenuViewable);
    if (checkForCharacter(characterData.coords, characterName)) {
      handleCharacterFound(characterName);
    }
  }

  return (
    <div className="game-wrapper _nightblue">
      <img
        src={whereisimage}
        alt="where is img"
        className={
          isGameStarted  && !isGameFinished ? "game-image" : "game_image _noReaction _blur"
        }
        draggable="false"
        onClick={(e) => onClickOpenMenu(e)}
        onMouseMove={(e) => onMouseMove(e)}
      />
      <Button handleStart={handleStart} />
      <Submit score={score} isGameFinished={isGameFinished} />
      <Cursor x={mouseCoords.x} y={mouseCoords.y} />
      <ContextMenu
        x={contextMenuCoords.x}
        y={contextMenuCoords.y}
        handleOptionChoose={handleOptionChoose}
        characterFound={characterFound}
        isViewable={isMenuViewable}
      />
    </div>
  );
}

export default Game;
