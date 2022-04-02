//import { useState } from "react";
import "./contact.scss";
import { Mail, LinkedIn, GitHub } from "@mui/icons-material";
import { header } from "../../../data/resumeData";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="links">
        <a href={header.emailLink}><Mail className="icon" /></a>
        <a href={header.linkedInLink}><LinkedIn className="icon" /></a>
        <a href={header.githubLink}><GitHub className="icon" /></a>
      </div>
      <p>built with ♥ by elaine han</p>
    </div>
  );
}
