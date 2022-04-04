import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './accSingle.scss';

export default function AccSingle({ title, technologies, desc, img, URL, URLName, demoURL, demoURLName }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={isActive ? "accSingle active" : "accSingle"} onClick={() => setIsActive(!isActive)}>
      <div className="item">
        <div className='visible'>
          <div className="left">
            <div className="leftContainer">
              <h3>{title}</h3>
              <h4>{technologies}</h4>
            </div>
          </div>
          <div className="right">
            <div className='img-box'><img src={img} alt=""/></div>
            <div className='sign'>
              {/* {isActive ? <img src="assets/down.png" alt=""></img> : <img src="assets/linkedin.png" alt=""></img>} */}
              <img src="assets/down.png" alt=""></img>
            </div>
          </div>
        </div>
        {isActive &&
          <div className="descrip">
            <p>{desc}</p>
            {(demoURL !== "") && <Link to={demoURL}>{demoURLName}</Link>}
            <a href={URL}>{URLName}</a>
          </div>
        }
      </div>
    </div>
  );
};
/*export const projects = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "MealTime",
      technologies: "Kotlin",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      URLName:
        "", 
      URL:
        "",
    },
    */