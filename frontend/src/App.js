import "./App.css";
import Game from "./Components/Game";
import Header from "./Components/Header";
import Notification from "./Components/Notification.jsx";
import Scoreboard from "./Components/Scoreboard";
import Footer from "./Components/Footer";
import { useState } from "react";
import { useStopwatch } from "react-timer-hook";

function App() {
  const [scoreboardOpen, setscoreboardOpen] = useState(false);
  const { minutes, seconds, start, pause, isRunning } = useStopwatch({
    autoStart: false,
  });

  function scoreboardToggle() {
    setscoreboardOpen(!scoreboardOpen);
  }

  return (
    <div className="App _nightblue _f-cream">
      <Scoreboard isOpen={scoreboardOpen} scoreboardToggle={scoreboardToggle} />
      <Notification />
      <Header
        isRunning={isRunning}
        minutes={minutes}
        scoreboardToggle={scoreboardToggle}
        seconds={seconds}
      />
      <main>
        <Game  startTimer={start}  pauseTimer={pause} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
