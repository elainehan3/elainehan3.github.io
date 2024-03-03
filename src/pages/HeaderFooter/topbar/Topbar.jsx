import "./topbar.scss";
//import { LinkedIn } from "@mui/icons-material";
import { menuLinks } from "../../../data/siteData";
import { NavLink } from "react-router-dom";

export default function Topbar({ menuOpen, setMenuOpen }, {color, setColor}) {
  return (
    <div className={color ? "topbar white" + (menuOpen && "active") : "topbar " + (menuOpen && "active") }>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">
            Elaine Han
          </a>
        </div>
        <div className="right">
          <div className="itemContainer">
            {menuLinks.map((m) => (
              <NavLink to={m.link}
              className={({ isActive }) => isActive ? "myActive" : "myInactive"}>
                <span>*</span>{m.title}
              </NavLink>
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
