import "./skills.scss";

export default function Skills() {
  return (
  <div className="skills" id="skills">
  {/* <div className="resumeHead"><h1>Resume</h1></div> */}
  <h2>Skills</h2>
    <div className="aboutContainer">
      <div className="right">
        <div className="horizList">
          <h3>Programming Languages:</h3>
          <p>C/C++, Python, React, HTML/CSS, Bash, TypeScript, Javascript, Kotlin, Racket, R</p>
        </div>
        <div className="horizList">
          <h3>Technologies:</h3>
          <p>Git, Bash, Docker, Unix/Linux, MIPS</p>
        </div>
        <div className="horizList">
          <h3>Languages:</h3>
          <p>English, French, Chinese</p>
        </div>
        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form> */}
      </div>
    </div>
    </div>
  );
}
