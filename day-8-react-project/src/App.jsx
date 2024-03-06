import { useState } from "react";
import "./style.css";

export function App() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Card subtitle
        </h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}

export function AppSwitch() {
  const [toggle, setToggle] = useState(0);
  function ChangeState() {
    if (toggle == 0) {
      setToggle(1);
    } else {
      setToggle(0);
    }
  }
  return (
    <div className="switch">
      <span>sell</span>
      <div className="switchtoggle" onClick={ChangeState}>
        <div
          className="switchtoggleball"
          style={{ left: toggle == 1 ? "10%" : "65%" }}
        ></div>
      </div>
      <span>buy</span>
    </div>
  );
}
