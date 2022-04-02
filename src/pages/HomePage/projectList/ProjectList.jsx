import { projects } from "../../../data/resumeData";
import AccSingle from "../../../components/accSingle/AccSingle";
import "./projectList.scss";

export default function ProjectList() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      {projects.map((p) => (
        <AccSingle
          title={p.title}
          technologies={p.techs}
          desc={p.desc}
          img={p.img}
          URL={p.link}
          URLName={p.linkName}
        />
      ))}
    </div>
  );
}
/* <div
        className="cards"
      >
        {projects.map((d) => (
          <div className="container" key={d.title}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h3>{d.title}</h3>
                  <h4>{d.technologies}</h4>
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
      </div> */
