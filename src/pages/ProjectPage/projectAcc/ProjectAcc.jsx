//import { useEffect, useState } from "react";
import AccSingle from "../../../components/accSingle/AccSingle";
import "./projectAcc.scss";
import { projects } from "../../../data/resumeData";

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
        />
      ))}
    </div>
  );
}