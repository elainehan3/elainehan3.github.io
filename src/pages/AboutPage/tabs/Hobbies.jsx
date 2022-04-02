import "./photoGallery.scss";
import { hobbies } from "../../../data/aboutData"

export default function Hobbies() {
  return (
    <div className="hobbies">
    <p>In my free time, you can find me...</p>
      <div className="photoGallery">
        {hobbies.map((d) => (
          <div className="item">
            <img src={d.img} alt={d.title} />
            <div className="textItem"><h3>{d.title}</h3></div>
          </div>
        ))
        }
      </div>
    </div>
  );
}