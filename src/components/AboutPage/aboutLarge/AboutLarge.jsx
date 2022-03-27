import "./aboutLarge.scss";
import {aboutInfo, aboutPhoto} from "../../AboutPage/aboutData"

export default function AboutMe() {
  return (
  <div className="aboutLarge" id="aboutMe">
    <div className="textAndPicture">
      <div className="left">
        <img src={aboutPhoto.img} alt="" />
      </div>
      <div className="right">
        <h2>Hi! I'm Elaine :)</h2>
        <p>{aboutInfo.longBio}</p>
        <div className="horizList">
          <div className="title">
          </div>
          <p>{aboutInfo.shortHobbies}</p>
        </div>
      </div>
    </div>
    </div>
  );
}
