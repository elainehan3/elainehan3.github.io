import { useEffect, useState } from "react";
import AboutMeList from "../aboutMeList/AboutMeList";
import "./aboutMe.scss";
import {
  firstAboutMe,
  hobbiesAboutMe,
  interestsAboutMe,
  artAboutMe,
} from "../../data";

export default function AboutMe() {
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
        setData(firstAboutMe);
        break;
      case "hobbies":
        setData(hobbiesAboutMe);
        break;
      case "interests":
        setData(interestsAboutMe);
        break;
      case "design":
        setData(artAboutMe);
        break;
      default:
        setData(firstAboutMe);
    }
  }, [selected]);

  return (
    <div className="aboutMe" id="aboutMe">
      <h1>About Me</h1>
      <ul>
        {list.map((item) => (
          <AboutMeList
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