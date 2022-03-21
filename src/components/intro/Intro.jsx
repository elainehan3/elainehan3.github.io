import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const hi = useRef();
  const elaine = useRef();
  const nice = useRef();

  
  useEffect(() => {
    init(hi.current, { showCursor: false, loop: false, strings: [ 'Hi! My name is'] });
    init(elaine.current, { showCursor: false, loop: false, startDelay: 2000, strings: [ 'Elaine.'] });
    init(nice.current, { showCursor: false, loop: false, startDelay: 3200, strings: [ 'Nice to meet you :)'] });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/flower2.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> <span ref={hi}></span> </h2>
          <h1> <span ref={elaine}></span> </h1>
          <h3> <span ref={nice}></span> </h3>
        </div>
        <a href="#projects">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
/*

export default function Intro() {
  const textRef = useRef();

  
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi!</h2>
          <h1>I'm Elaine</h1>
          <h3>
            Nice to meet you :)<span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
*/
