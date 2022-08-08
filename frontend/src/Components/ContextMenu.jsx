import "../App.css";
function ContextMenu(props) {
  const DivStyle = {
    top: props.y - 75,
    left: props.x - 75,
    zIndex: isViewable(),
    opacity: isViewable(),
  };

  function isViewable() {
    if (props.isViewable) {
      return 1;
    }
    return -1;
  }

  return (
    <div style={DivStyle} className="_box_round _nightblue context-menu">
      <button
        className={
          props.characterFound.turtle
            ? "button _nightblue  button-contextmenu _disabled"
            : "button _nightblue  button-contextmenu"
        }
        value={"turtle"}
        onClick={(e) => props.handleOptionChoose(e.target.value)}
      >
        Turtle
      </button>
      <button
        className={
          props.characterFound.bee
            ? "button _nightblue  button-contextmenu _disabled"
            : "button _nightblue  button-contextmenu"
        }
        value={"bee"}
        onClick={(e) => props.handleOptionChoose(e.target.value)}
      >
        Bee Reading
      </button>
      <button
        className={
          props.characterFound.squirrel
            ? "button _nightblue  button-contextmenu _disabled"
            : "button _nightblue  button-contextmenu"
        }
        value={"squirrel"}
        onClick={(e) => props.handleOptionChoose(e.target.value)}
      >
        Flying squirrel
      </button>
    </div>
  );
}

export default ContextMenu;
