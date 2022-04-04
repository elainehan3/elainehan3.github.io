import { menuLinks } from "../../../data/siteData";
import "./menu.scss";
import { Link } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        {menuLinks.map((m) => (
          <li key={m.title} onClick={()=>setMenuOpen(false)}>
            <Link to={m.link}>{m.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
