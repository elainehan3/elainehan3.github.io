import "./aboutMeList.scss";

export default function AboutMeList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "aboutMeList active" : "aboutMeList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
