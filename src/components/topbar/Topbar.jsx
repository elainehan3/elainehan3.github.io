import "./topbar.scss";
//import { Person, Mail } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Elaine Han
          </a>
          <div className="itemContainer">
            <div className="icon">
              <img src="linkedin.svg" alt=""/>
            </div>
            {/* <span>+44 924 12 74</span> */}
          </div>
          <div className="itemContainer">
            <img src="linkedin.svg" alt=""/>
            {/* <span>safak@genius.com</span> */}
          </div>
        </div>
        <div className="right">
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
