import "./aboutLarge.scss";
import { aboutInfo, aboutPhoto } from "../../../data/aboutData"

export default function AboutMe() {
  return (
    <div className="aboutLarge" id="aboutMe">
      <div className="textAndPicture">
        <div className="text-picture-container">
          <div className="left">
            <div className="img-box"><img src={aboutPhoto.img} alt="" /></div>
          </div>
          <div className="right">
            <h2>Hi! I'm Elaine :)</h2>
            <p>More to come...</p>
            <div className="horizList">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
