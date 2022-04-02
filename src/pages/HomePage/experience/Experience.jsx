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
                  <div className="companyContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h4>{d.company}</h4>
                  </div>
                  <h3>{d.title}</h3>
                  {/* <p>{<ul>
                    {d.did.map((d) => (
                      <li>{d}</li>
                    ))}
                  </ul>}</p> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
