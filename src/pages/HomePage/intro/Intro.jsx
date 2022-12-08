import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const hi = useRef();
  const elaine = useRef();
  const nice = useRef();

  
  useEffect(() => {
    init(hi.current, { 
      showCursor: false, 
      loop: false, 
      strings: [ 'Hi!'] });
    init(elaine.current, {
      showCursor: false, 
      loop: false, 
      startDelay: 2000, 
      strings: [ "I'm Elaine."]
    });
    init(nice.current, { 
      showCursor: false, 
      loop: false, 
      startDelay: 3800,
      strings: [ 'Happy to see you here :)'] 
    });
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
          <div className="l1"> <span ref={hi}></span> </div>
          <div className="l2"><span ref={elaine}></span> </div>
          <div className="l3"> <span ref={nice}></span> </div>
        </div>
        {/* <a href="#aboutMe">
          <img src="assets/down.png" alt="" />
        </a> */}
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
