import { useEffect, useState } from "react";
import apiService from "../Services/ApiService";
import uniqid from 'uniqid'

export default function Scoreboard(props) {
  const [players, setPlayers] = useState(null);

  const { fetchScoreboard } = apiService;
  function createPlayerRow(player) {
    return (
      <tr key={uniqid()}>
        <td>{player.name}</td>
        <td>{player.scoreString}</td>
      </tr>
    );
  }

  useEffect(() => {
    fetchScoreboard().then((value) => {
      setPlayers(value);
    });
  }, [fetchScoreboard]);

  return (
    <div
      className={
        props.isOpen
          ? "modalbox-modal-content _f-black centerxy scoreboard"
          : "_hidden"
      }
    >
      <legend className="_alignCenter">
        <h5>Leaderboard</h5>
      </legend>
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
          {players == null
            ? null
            : players.map((player) => createPlayerRow(player))}
        </tbody>
      </table>{" "}
    </div>
  );
}
