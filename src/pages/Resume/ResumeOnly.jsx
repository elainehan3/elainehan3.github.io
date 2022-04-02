import "./resume.scss";
import React from 'react';
import { Mail, Phone, LinkedIn, Language } from "@mui/icons-material";
import * as rdata from "../../data/resumeData.js";

export default class ResumeOnly extends React.PureComponent {
  render() {
    return (
      <div className="resume-container" id="resume">
        <div className="resume">
          <div className="section">
            <div className="header">
              <h1>{rdata.header.name}</h1>
              <div className="contacts">
                <div className="contact-and-icon">
                  <Mail className="icon" />
                  <a href={rdata.header.emailLink}><h5>{rdata.header.email}</h5></a>
                </div>
                <div className="contact-and-icon">
                  <Phone className="icon" />
                  <h5>{rdata.header.phone}</h5>
                </div>
                <div className="contact-and-icon">
                  <LinkedIn className="icon" />
                  <a href={rdata.header.linkedInLink}><h5>{rdata.header.linkedIn}</h5></a>
                </div>
                <div className="contact-and-icon">
                  <Language className="icon" />
                  <a href={rdata.header.site}><h5>{rdata.header.site}</h5></a>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <h2>Skills</h2>
            <hr />
            <div className="data">
              {rdata.skills.map((l) => {
                return (
                  <div className="skill-list-name">
                    <h3>{l.title}: </h3>
                    <p>{l.items}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="section">
            <h2>Projects</h2>
            <hr />
            <div className="data">
              <div className="entry">
                <div className="plainline">
                  <h3>{rdata.resumeSite.title}</h3><h5> | {rdata.resumeSite.techs}</h5>
                </div>
                <div className="line">
                  <ul>
                    <li>Designed, developed, and deployed a mobile-friendly & responsive portfolio website with interactive elements</li>
                    <li>Site also hosts small projects such as:</li>
                    <ul>
                      <li><strong>Needle in a Haystack</strong> - Fully functioning and responsive i-Spy minigame</li>
                      <li><strong>Weather</strong> - Mobile-friendly and responsive weather web app using OpenWeather API</li>
                    </ul>
                  </ul>
                </div>
              </div>
              {rdata.resumeProjects.map(p => {
                return (
                  <div className="entry">
                    <div className="plainline">
                      <h3>{p.title} </h3><h5> | {p.techs}</h5>
                    </div>
                    <div className="line">
                      <ul>
                        {p.did.map((d) => (
                          <li>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="section">
            <h2>Experience</h2>
            <hr />
            <div className="data">
              {rdata.experience.map(e => {
                return (
                  <div className="entry">
                    <div className="line">
                      <h3>{e.title}</h3>
                    </div>
                    <div className="line">
                      <h4>{e.company}</h4>
                      <p>{e.start} - {e.end}</p>
                    </div>
                    <div className="line">
                      <ul>
                        {e.did.map((d) => (
                          <li>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="section">
            <h2>Activities</h2>
            <hr />
            <div className="data">
              {rdata.activities.map(e => {
                return (
                  <div className="entry">
                    <div className="line">
                      <h3>{e.title}</h3>
                    </div>
                    <div className="line">
                      <h4>{e.company}</h4>
                      <p>{e.start} - {e.end}</p>
                    </div>
                    <div className="line">
                      <ul>
                        {e.did.map((d) => (
                          <li>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="section">
            <h2>Education</h2>
            <hr />
            <div className="data">
              <div className="entry">
                <div className="line">
                  <h3>{rdata.education.program}</h3>
                </div>
                <div className="line">
                  <h4>{rdata.education.title} - {rdata.education.howAreMyGradesDoing}</h4>
                  <p>{rdata.education.start} - {rdata.education.end}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
