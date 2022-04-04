import AccSingle from "./AccSingle";
import "./projectAcc.scss";
import { projects } from "../../data/resumeData";

export default function ProjectAcc() {
  return (
    <div className="projectAcc">
      {projects.map((p) => (
        <AccSingle
          title={p.title}
          technologies={p.techs}
          desc={p.desc}
          img={p.img}
          URL={p.link}
          URLName={p.linkName}
          demoURL={p.demo}
          demoURLName={p.demoName}
        />
      ))}
    </div>
  );
}