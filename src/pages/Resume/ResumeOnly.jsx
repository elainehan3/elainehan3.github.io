import "./resume.scss";
import React from 'react';
import { Mail, LinkedIn, Language, GitHub } from "@mui/icons-material";
import * as rdata from "../../data/resumeData.js";

function Skills() {
  return (
    <div className="section">
      {/* <h2>Skills</h2> */}
      <hr />
      <div className="data">
        {rdata.skills.map((l) => {
          return (
            <div className="skill-list-name">
              <h3>{l.title}: </h3>
              <h4>{l.items}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Education() {
  return (
    <div className="section">
      <h2>Education</h2>
      <hr />
      <div className="data">
        <div className="entry">
          <div className="line">
            <h3>{rdata.education.program}</h3>
          </div>
          <div className="line">
            {/* <h4>{rdata.education.title} - {rdata.education.howAreMyGradesDoing}</h4> */}
            <h4>{rdata.education.title}</h4>
            <p>{rdata.education.start} - {rdata.education.end}</p>
          </div>
          {/* <p>∙ <strong>Relevant coursework: </strong>{rdata.education.courses}</p> */}
        </div>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div className="section">
      <h2>Experience</h2>
      <hr />
      <div className="data">
        {rdata.experience.map(e => {
          return (
            <div className="entry">
            <div className="line">
                <div className="plainline">
                <h3>{e.title} </h3>{(e.techs && e.techs !== "") && <h5>— {e.techs}</h5>}
                </div>
              </div>
              <div className="line">
                <h4>{e.company}</h4>
                <p>{e.start} - {e.end}</p>
              </div>
              {e.did.map((d) => (
                <p>∙ {d}</p>
              ))}

            </div>
          )
        })}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className="section">
      <h2>Projects</h2>
      <hr />
      <div className="data">
        {rdata.projectsResume.map(p => {
          return (
            <div className="entry">
              <div className="line">
                <div className="plainline">
                  <h3 style={{ fontWeight: "normal" }}>{p.title} — </h3><h5>{p.techs}</h5>
                </div>
                <a href={p.resumeLink}><p style={{ whiteSpace: "nowrap" }}><i>{p.resumeLinkName}</i></p></a>
              </div>
              {p.did.map((d) => (
                <p>∙ {d}</p>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// function Activities() {
//   return (
//     <div className="section">
//       <h2>Activities</h2>
//       <hr />
//       <div className="data">
//         {rdata.activities.map(e => {
//           return (
//             <div className="entry">
//               <div className="plainline">
//                 <h3>{e.title} </h3>{(e.techs !== "") && <h5>— {e.techs}</h5>}
//               </div>
//               <div className="line">
//                 <h4>{e.company}</h4>
//                 <p>{e.start} - {e.end}</p>
//               </div>
//               {e.did.map((d) => (
//                 <p>∙ {d}</p>
//               ))}
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

export default class ResumeOnly extends React.PureComponent {
  render() {
    return (
      <div className="resume-container" id="resume">
        <div className="resume">
          <div className="section">
            <div className="header">
              <h1>{rdata.header.name}</h1>
              <h4>{rdata.header.year}</h4>
              <div className="contacts">
                <div className="contact-and-icon">
                  <Mail className="icon" />
                  <a href={rdata.header.emailLink}><h4>{rdata.header.email}</h4></a>
                </div>
                <div className="contact-and-icon">
                  <LinkedIn className="icon" />
                  <a href={rdata.header.linkedInLink}><h4>{rdata.header.linkedIn}</h4></a>
                </div>
                <div className="contact-and-icon">
                  <GitHub className="icon" />
                  <a href={rdata.header.githubLink}><h4>{rdata.header.github}</h4></a>
                </div>
                <div className="contact-and-icon">
                  <Language className="icon" />
                  <a href={rdata.header.siteLink}><h4>{rdata.header.site}</h4></a>
                </div>
              </div>
            </div>
          </div>
          <Skills/>
          <Experience />
          
          <Projects />
          
          
          {/* <Activities /> */}
          
          <Education />
        </div>
      </div>
    )
  }
}
