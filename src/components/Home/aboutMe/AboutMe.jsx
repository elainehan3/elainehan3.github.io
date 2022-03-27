import "./aboutMe.scss";
import { Mail, LinkedIn } from "@mui/icons-material";
//import { useState } from "react";

export default function AboutMe() {
  return (
  <div className="aboutMe" id="aboutMe">
  <h2>About Me</h2>
    <div className="aboutContainer">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <p>Hi! I'm Elaine, a current 2B Honors Computer Science, Co-op student at the University of Waterloo, and I am passionate about being involved, learning lots, and making a difference. I am constantly looking to learn, improve myself, and meet new people. Please don't hesitate to reach out, I would love to connect!</p>
        <div className="horizList">
          <div className="title">
          </div>
          <p>Some of my hobbies include: hiking, drawing, playing the piano, and writing (some photos at the bottom of this page)!</p>
        </div>
        <div className="links">
          <h3>Get In Touch!</h3>
          <a href="mailto:elaine.han@uwaterloo.ca"><Mail className="icon" /></a>
          <a href="https://www.linkedin.com/in/elainehan3/" ><LinkedIn className="icon" /></a>
        </div>
        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form> */}
      </div>
    </div>
    </div>
  );
}
