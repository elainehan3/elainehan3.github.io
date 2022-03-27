import "./aboutSmall.scss";
import { Mail, LinkedIn } from "@mui/icons-material";
import {aboutInfo, aboutPhoto} from "../../AboutPage/aboutData"
//import { useState } from "react";

export default function AboutSmall() {
  return (
  <div className="aboutSmall" id="aboutSmall">
  <h2>About Me</h2>
    <div className="textAndPicture">
      <div className="left">
        <img src={aboutPhoto.img} alt="" />
      </div>
      <div className="right">
        <p>{aboutInfo.shortBio}</p>
        <div className="horizList">
          <div className="title">
          </div>
          <p>{aboutInfo.shortHobbies}</p>
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
