import { useEffect, useState } from "react";
import GalleryList from "./GalleryList";
import "./gallery.scss";
import {
  firstGallery,
  secondGallery,
  thirdGallery,
  fourthGallery,
  categories,
} from "../aboutData";

export default function Gallery() {
  const [selected, setSelected] = useState("1");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "1":
        setData(firstGallery);
        break;
      case "2":
        setData(secondGallery);
        break;
      case "3":
        setData(thirdGallery);
        break;
      case "4":
        setData(fourthGallery);
        break;
      default:
        setData(firstGallery);
    }
  }, [selected]);

  return (
    <div className="gallery" id="gallery">
      <div className="categories">
        {categories.map((item) => (
          <GalleryList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            img={item.img}
          />
        ))}
      </div>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}