import { useEffect, useState } from "react";
import GalleryList from "../galleryList/GalleryList";
import "./gallery.scss";
import {
  firstGallery,
  hobbiesGallery,
  interestsGallery,
  artGallery,
} from "../../data/data";

export default function Gallery() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "overview",
      title: "Overview",
    },
    {
      id: "hobbies",
      title: "Hobbies",
    },
    {
      id: "interests",
      title: "Interests",
    },
    {
      id: "art",
      title: "Art",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "overview":
        setData(firstGallery);
        break;
      case "hobbies":
        setData(hobbiesGallery);
        break;
      case "interests":
        setData(interestsGallery);
        break;
      case "design":
        setData(artGallery);
        break;
      default:
        setData(firstGallery);
    }
  }, [selected]);

  return (
    <div className="gallery" id="gallery">
      <h1>About Me</h1>
      <ul>
        {list.map((item) => (
          <GalleryList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
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