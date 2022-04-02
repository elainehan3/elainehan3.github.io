import "./tabsList.scss";

export default function GalleryList({ id, title, active, setSelected, img}) {
  return (
      <div className={active ? "tabsList active" : "tabsList"}
      onClick={() => setSelected(id)}
    >
      <div className="textItem"><h3>{title}</h3></div>
      </div>
  );
}
