export default function Button(props) {
  function onStart() {
    props.handleStart();
    document.documentElement.style.setProperty("--img-opacity", 1);
    document.documentElement.style.setProperty("--events-img", "auto");
    document.documentElement.style.setProperty("--bg-color", "none");
    document.documentElement.style.setProperty("--display-button", "none");
    document.documentElement.style.setProperty("--cursor-display", "block");
  }

  return (
    <button onClick={onStart} className="_xlarge _round _nightblue button-start">
      {" "}
      Start{" "}
    </button>
  );
}
