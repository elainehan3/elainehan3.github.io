// import React, { useMemo, useState, useEffect } from "react"
// import { useMouse } from "react-use"
// import useSound from "use-sound"
import React, { useState } from "react"
import "./findneedle.scss";
//import Confetti from "react-dom-confetti"

export default function FindNeedle() {
  const needleWidth = 40;
  const imgHeight = 400;
  const [found, setFound] = useState(false);
  //const [showConfetti, setShowConfetti] = useState(false)
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
    //setShowConfetti(false);
    setShowPlayAgain(false);
    setPosY(getRandY(imgHeight));
    setPosX(getRandX(80));
  }



  const isFound = () => {
    if (!found) {
      setShowPlayAgain(true);
      // setTimeout(() => {
      //   setShowConfetti(true)
      // }, 420)
    }
    setFound(true)
  }
  return (
    <div className="findneedle">
      <div className="needleHead">
        <h2>Find the needle in the haystack</h2>
        <div className="descr">
          <p>Find </p><img className="icon" src="assets/needleblack.svg" alt="needle" /><p> hidden in the image below</p>
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
        <div className="needle-wrapper"
          style={{
            top: "-" + PosY + "px",
            left: PosX + "%",
          }}>
          <img className="needle"
            onClick={isFound}
            src={found ? "assets/needlewhite.svg" : "assets/needlewhite.svg"}
            alt="needle"
            style={{
              opacity: found ? 1 : 0.5,
              // top: "-400px",
              //left: "88%",
            }}
          />
          {showPlayAgain && (<div className="foundDis">
            <p>You found the needle!</p>
            <button onClick={restart}>Play Again!</button>
            </div>
          )}
          
        </div>
      </div>
    </div>
  )
}