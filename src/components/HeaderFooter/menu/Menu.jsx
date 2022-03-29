import { menuLinks } from "../../../data/siteData";
import "./menu.scss";
//import { Link } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        {menuLinks.map((m) => (
          <li onClick={()=>setMenuOpen(false)}>
            <a href={m.link}>{m.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
