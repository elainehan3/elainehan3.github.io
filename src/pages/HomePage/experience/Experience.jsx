import "./experience.scss";
import { experience } from "../../../data/resumeData";

export default function Experience() {

  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <div
        className="cards"
      >
        {experience.map((d) => (
          <div className="container" key={d.title}>
            <div className="item">
              <div className="right">
                <img src={d.img} alt=""/>
              </div>
              <div className="left">
                <div className="leftContainer">
                  <h5>{d.start} - {d.end}</h5>
                  <div className="companyContainer"> {/* this div only shows up on mobile */ }
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h4>{d.company}</h4>
                  </div>
                  <h3>{d.title}</h3>
                    {/* {d.did.map((d) => (
                      <p>∙ {d}</p>
                    ))} */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
