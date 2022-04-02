import { useEffect, useState } from "react";
import GalleryList from "../tabsList/GalleryList";
import "./tabs.scss";
import {
  firstGallery,
  secondGallery,
  thirdGallery,
  fourthGallery,
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
        setData(secondGallery);
        break;
      case "interests":
        setData(thirdGallery);
        break;
      case "design":
        setData(fourthGallery);
        break;
      default:
        setData(firstGallery);
    }
  }, [selected]);

  return (
    <div className="tabs" id="tabs">
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