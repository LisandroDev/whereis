import logo from "super-tiny-icons/images/svg/github.svg";

export default function Footer() {
  return (
    <footer className="_nightblue">
      <div className="row">
        <div className="col m1-5 "></div>
        <div className="col m1-5"></div>
        <div className="col m1-5 _alignCenter">
        <a className="_high _f-black github" href="https://github.com/lichaa824">
        <img className="svgs" src={logo} alt="Github Logo" />
        </a>
        </div>
        <div className="col m1-5"></div>
        <div className="col m1-5 ">
          Image by:{" "}
          <a href="https://marijatiurina.com/">
            <strong>
              <em className="_f-cream">Marija Tiurina</em>
            </strong>
          </a>
        </div>
      </div>
    </footer>
  );
}
