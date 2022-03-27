//import { useEffect, useState } from "react";
import AccSingle from "../accSingle/AccSingle";
import "./projectAcc.scss";
import { projects } from "../../../data/resumeData";

export default function ProjectAcc() {
  return (
  <div className="projectAcc">
    <h1>Projects</h1>
    {projects.map((p) => (
      <AccSingle 
      title={p.title}
      technologies={p.technologies}
      desc={p.desc}
      img={p.img}
      URL={p.URL}
      URLName={p.URLName}
      />
    ))}
  </div>
  );
}