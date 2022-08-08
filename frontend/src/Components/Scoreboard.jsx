import useFirestore from "../Hooks/useFirestore";
import { useEffect, useState } from "react";

export default function Scoreboard(props) {
  const [players, setPlayers] = useState(null);

  // const { fetchScoreboard } = useFirestore();

  function createPlayerRow(player) {
    return (
      <tr key={player.name}>
        <td>{player.name}</td>
        <td>{player.score}</td>
      </tr>
    );
  }

  useEffect(() => {
    // fetchScoreboard().then(function (value) {
    //   setPlayers(value);
    // });
  }, []);

  return (
    <div
      className={
        props.isOpen ? "modalbox-modal-content _f-black centerxy scoreboard" : "_hidden"
      }
    >
    <legend className="_alignCenter"><h5>Leaderboard</h5></legend>
      <span
        onClick={props.scoreboardToggle}
        className="-close"
        id="modalbox-close"
      >
        ✖
      </span>
      <table className="_width100 _noReaction">
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {players == null ? null : players.map(player => createPlayerRow(player))}
        </tbody>
      </table>{" "}
    </div>
  );
}
