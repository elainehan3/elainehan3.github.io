import "./topbar.scss";
//import { LinkedIn } from "@mui/icons-material";
import { menuLinks } from "../../data/siteData";
//import { Link } from "react-router-dom";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">
            Elaine Han
          </a>
        </div>
        <div className="right">
          <div className="itemContainer">
            {menuLinks.map((m) => (
              <a href={m.link}>{m.title}</a>
            ))}
            {/* <div className="icon">
              <a href="https://www.linkedin.com/in/elainehan3/" ><LinkedIn className="icon" /></a>
            </div> */}
          </div>
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
