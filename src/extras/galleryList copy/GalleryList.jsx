import "./galleryList.scss";

export default function GalleryList({ id, title, active, setSelected, img}) {
  return (
      <div className={active ? "galleryList active" : "galleryList"}
      onClick={() => setSelected(id)}
    >
      <div className="textItem"><h3>{title}</h3></div>
      <div className="item">
        <img
          src={img}
          alt=""/>
        <h3>{title}</h3>
      </div>
      </div>
  );
}
