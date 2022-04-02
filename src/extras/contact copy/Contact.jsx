//import { useState } from "react";
import "./contact.scss";
import { Mail, LinkedIn } from "@mui/icons-material";

export default function Contact() {
  // const [message, setMessage] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };
   return (
    <div className="contact" id="contact">
      {/* <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div> */}
      <div className="right">
      {/*<h2>Contact</h2>*/}
        <div className="links">
          <h3>Contact Me</h3>
          <a href="mailto:elaine.han@uwaterloo.ca"><Mail className="icon" /></a>
          <a href="https://www.linkedin.com/in/elainehan3/" ><LinkedIn className="icon" /></a>
        </div>
        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form> */}
      </div>
    </div>
  );
}
