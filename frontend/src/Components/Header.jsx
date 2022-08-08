import logo from "../Images/magnifying-glass.svg"

export default function Header(props) {

  return (
    <header>
      <div className="topnav row _alignCenter">
        <div className="col m1-5 _noPadding ">
        <div className="brand">
        <h1 >Where's <img className="svgs" src={logo} alt="Webpage Logo" /></h1>
        </div>
        </div>
        <div className="col m1-5 "></div>
        <div className="col m1-5 ">
        <p className={props.isRunning ? "_warning _high _f-black _round" : "_hidden"}> <strong>{props.minutes} : {props.seconds}</strong></p>
        </div>
        <div className="col m1-5 "></div>
        <div className="col m1-5 ">
          <button onClick={props.scoreboardToggle} className="button _f-white">Scoreboard</button>
        </div>
      </div>
    </header>
  );
}
