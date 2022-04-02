import "./aboutSmall.scss";
import "./skills.scss";
import { Mail, LinkedIn, GitHub } from "@mui/icons-material";
import { aboutInfo, aboutPhoto } from "../../../data/aboutData"
import { Link } from "react-router-dom";
import { header, skills } from "../../../data/resumeData";

export default function AboutSmall() {
  return (
    <div className="aboutSmall" id="aboutSmall">
      <div className="textAndPicture">
        <div className="text-picture-container">
          <div className="left">
            <div className="img-box"><img src={aboutPhoto.img} alt="" /></div>
          </div>
          <div className="right">
            <p>{aboutInfo.shortBio}</p>
            <div className="horizList">
              <p>{aboutInfo.shortHobbies}</p>
            </div>
            <p>More about me <Link to="/about">here</Link>!</p>
            <div className="links">
              <a href={header.emailLink}><Mail className="icon" /></a>
              <a href={header.linkedInLink}><LinkedIn className="icon" /></a>
              <a href={header.githubLink}><GitHub className="icon" /></a>
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
      <div className="skills" id="skills">
        <h2>Skills</h2>
        <div className="textAndPicture">
          <div className="right">
            <div className="horizList">
              <h4>Programming Languages:</h4>
              <p>{skills[0].items}</p>
            </div>
            <div className="horizList">
              <h4>Technologies:</h4>
              <p>{skills[1].items}</p>
            </div>
            <div className="horizList">
              <h4>Languages:</h4>
              <p>English, French, Chinese</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
