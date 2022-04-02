import "./skills.scss";
import { skills } from "../../../data/resumeData";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h2>Skills</h2>
      <div className="textAndPicture">
        <div className="right">
          <div className="horizList">
            <h4>{skills.languages.title}</h4>
            <p>C/C++, Python, React, HTML/CSS, Bash, TypeScript, Javascript, Kotlin, Racket, R</p>
          </div>
          <div className="horizList">
            <h4>Technologies:</h4>
            <p>Git, Bash, Docker, Unix/Linux, MIPS</p>
          </div>
          <div className="horizList">
            <h4>Languages:</h4>
            <p>English, French, Chinese</p>
          </div>
        </div>
      </div>
    </div>
  );
}
