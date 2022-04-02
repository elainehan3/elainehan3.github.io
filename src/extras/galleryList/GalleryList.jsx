import "./tabsList.scss";

export default function GalleryList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "tabsList active" : "tabsList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
