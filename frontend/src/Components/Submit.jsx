import { useRef, useState } from "react";
import useSubmit from "../Hooks/useSubmit";
import validator from "validator";
import { toast } from "react-toastify";


export default function Submit(props) {
  const inputValue = useRef();
  const [alreadyPush, setalreadyPush] = useState(false);

  const { pushToScoreboard, secondsFormat } = useSubmit();

  function validateInput(input){
    return validator.isAlphanumeric(input)
  };

  function onClick(name, score) {
    if(validateInput(name)){
      pushToScoreboard(name, score);
      setalreadyPush(!alreadyPush);
      toast.success('Score submitted!')
      setTimeout(() => {window.location.reload()},3000)
    }
    else{
      toast.error('Only letters and numbers without whitespaces !')
    }
  }

  return (
    <div
      className={
        props.isGameFinished
          ? "modalbox-modal-content _f-black centerxy "
          : "_hidden"
      }
      style={{ innerHeight: 250 }}
    >
      <p className="_alignCenter">
        Your final time is: {secondsFormat(props.score)}
      </p>
      <form>
        <fieldset className="_alignCenter">
          <div className="row _alignCenter">
            <div className="col m1-7 _alignCenter">
              <label className="_alignCenter " htmlFor="name">
                Enter nickname
              </label>
              <input
                ref={inputValue}
                className="_alignCenter"
                type="text"
                placeholder="Jorge"
                id="name"/>
            </div>
          </div>
          <button
            type="button"
            className={
              alreadyPush
                ? "_disabled _noReaction _alignCenter _primary button"
                : "_alignCenter _primary button"
            }
            onClick={() => onClick(inputValue.current.value, props.score)}
          >
            Submit score
          </button>
          <br />
            {" "}
            <button className="_alignCenter _primary button  testo"> Restart </button>
            <button className="_alignCenter _primary button _danger">
              Don't submit
            </button>
        </fieldset>
      </form>
    </div>
  );
}
