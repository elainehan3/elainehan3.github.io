import "./activities.scss";
import { activities } from "../../../data/resumeData";

export default function Activities() {
  return (
    <div className="activities" id="activities">
      <h1>Other Activities</h1>
      <div className="cards">
        {activities.map((d) => (
          <div className="container" key={d.title}>
            <div className="item">
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
              <div className="left">
                <div className="leftContainer">
                  <h4>{d.duration}</h4>
                  <div className="companyContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h3>{d.company}</h3>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
