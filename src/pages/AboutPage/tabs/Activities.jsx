import "./activities.scss";
import { activities, activitiesNotResume } from "../../../data/resumeData";

function makeCards(d) {
  return (
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
            <h5>{d.duration}</h5>
            <div className="companyContainer">
              <div className="imgContainer">
                <img src={d.icon} alt="" />
              </div>
              <h4>{d.company}</h4>
            </div>
            <h3>{d.title}</h3>
            <p>{d.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Activities() {
  return (
    <div className="activities" id="activities">
    <p>Some of my activities outside of school!</p>
      <div className="cards">
        {activities.map((d) =>  {
          return (
            makeCards(d)
          )
        })}
        {activitiesNotResume.map((d) =>  {
          return (
            makeCards(d)
          )
        })}
      </div>
    </div>
  );
}
