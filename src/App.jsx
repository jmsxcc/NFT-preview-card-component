import React from "react";
import ETN from "./images/image-equilibrium.jpg";
import Icon_ETN from "./images/icon-ethereum.svg";
import Clock from "./images/icon-clock.svg";
import Avatar from "./images/image-avatar.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <div className="card__img">
          <img src={ETN} alt="" />
        </div>
        <div className="card__info">
          <h3>Equilibrium #3429</h3>
          <p>Our Equilibrium collection promotes balance and calm.</p>

          <div className="card__box">
            <div className="box">
              <img src={Icon_ETN} alt="" />
              <span>0.041 ETH</span>
            </div>

            <div className="box">
              <img src={Clock} alt="" />
              <span className="clock">3 days left</span>
            </div>
          </div>

          <div className="avatar">
            <img src={Avatar} alt="" />
            <p>
              Creation of<span> Jules Wyvern</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
