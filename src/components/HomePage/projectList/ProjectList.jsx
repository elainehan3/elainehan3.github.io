import { projects } from "../../../data/resumeData";
import "./projectList.scss";

export default function ProjectList() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div
        className="cards"
      >
        {projects.map((d) => (
          <div className="container" key={d.title}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <h3>{d.technologies}</h3>
                  <p>{d.desc}</p>
                  <a href={d.URL}>{d.URLName}</a>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
