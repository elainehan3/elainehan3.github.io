// import React, { useMemo, useState, useEffect } from "react"
// import { useMouse } from "react-use"
// import useSound from "use-sound"
import React, { useState } from "react"
import "./findneedle.scss";
import Confetti from "./Confetti"

export default function FindNeedle() {
  const needleWidth = 45;
  const imgHeight = 700;
  const [found, setFound] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPlayAgain, setShowPlayAgain] = useState(false);
  const getRandY = (max) => {
    return needleWidth + Math.floor(Math.random() * (max - needleWidth));
  }
  const getRandX = (max) => {
    return Math.floor(Math.random() * (max));
  }
  const [PosY, setPosY] = useState(getRandY(imgHeight));
  const [PosX, setPosX] = useState(getRandX(90));



  const restart = () => {
    setFound(0);
    setShowConfetti(false);
    setShowPlayAgain(false);
    setPosY(getRandY(imgHeight));
    setPosX(getRandX(90));
  }



  const isFound = () => {
    if (!found) {
      setShowPlayAgain(true);
      setShowConfetti(true);
    }
    setFound(true)
  }
  return (
    <div className="findneedle" id="findneedle">
      <div className="needleHead">
        <div className="needleTitle"><img src="./assets/haystack.png" alt="" />
          <h2>Needle in a haystack</h2>
        </div>
        <div className="descr">
          <p>Find the</p><img className="icon" src="assets/needleblack.svg" alt="needle" /><p> hidden in the image below!</p>
        </div>
      </div>
      <div className="gameBox">
        <div className="img-back-cont">
          <img className="back"
            src="assets/twisted-pile-of-hay.jpeg"
            alt="hay"
            style={{
              //opacity: found ? 0 : 1,
            }} />
        </div>
        <div className={found ? "needle-wrapper found" : "needle-wrapper"}
          style={{
            // top: "-200px",
            // left: "50%",
            top: "-" + PosY + "px",
            left: PosX + "%",
          }}>
          <img className="needle"
            onClick={isFound}
            src={found ? "assets/needlewhite.svg" : "assets/needlewhite.svg"}
            alt="needle"
            style={{
              opacity: found ? 1 : 0.5,
            }}
          />
        </div>
        <div className={showPlayAgain ? "foundDis display" : "foundDis"}>
          <p>You found it!</p>
          <button onClick={restart}>Play again!</button>
        </div>
        <div className="confetti-container">
          {showConfetti && (
            <Confetti
              options={{ count: 100, gravity: 20, timeout: 3 }}
              streamAnimation={showConfetti}
            />
          )}
        </div>
      </div>
    </div>
  )
}