import "./galleryList.scss";

export default function GalleryList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "galleryList active" : "galleryList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
