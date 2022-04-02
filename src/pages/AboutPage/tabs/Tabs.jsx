import { useEffect, useState } from "react";
import TabsList from "./TabsList";
import Activities from './Activities';
import Hobbies from './Hobbies';
import Work from './Work';
import "./tabs.scss";
import {categories} from "../../../data/aboutData"

export default function Tabs() {
  const [selected, setSelected] = useState("hobbies");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "future":
        setData(Work);
        break;
      case "activities":
        setData(Activities);
        break;
      case "hobbies":
        setData(Hobbies);
        break;
      default:
        setData(Work);
    }
  }, [selected]);

  return (
    <div className="tabs" id="tabs">
      <div className="categories">
        {categories.map((item) => (
          <TabsList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            img={item.img}
          />
        ))}
      </div>
      <div className="tab-container">
        {data}
      </div>
    </div>
  );
}