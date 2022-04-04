import "./aboutSmall.scss";
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
            <h4>Happy to see you here!</h4>
            <p>{aboutInfo.shortBio}</p>
            <p>{aboutInfo.shortHobbies}</p>
            <p>More to see about me on my <Link to="/about">about</Link> page!</p>
            <div className="links">
              <a href={header.emailLink}><Mail className="icon" /></a>
              <a href={header.linkedInLink}><LinkedIn className="icon" /></a>
              <a href={header.githubLink}><GitHub className="icon" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="skills" id="skills">

        <div className="textAndPicture">
          <div className="text-picture-container">
            <div className="left">
            <div className="img-box"><h2 style={{width:"100%;"}}>Skills</h2></div>
            </div>
            <div className="right">
                <h4>Programming Languages:</h4>
                <p>{skills[0].items}</p>
                <h4>Tools & Technologies:</h4>
                <p>{skills[1].items}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
