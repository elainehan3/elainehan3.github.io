import "./projects.scss";

export default function Projects() {
  const data = [
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
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Personal Website",
      technologies: "React, JavaScript, HTML/CSS",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      URLName:
        "", 
      URL:
        "",
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "Biquadris",
      technologies: "C++",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      URLName:
        "", 
      URL:
        "",
    },
  ];
  
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div
        className="slider"
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <h3>{d.technologies}</h3>
                  <p>{d.desc}</p>
                  <a href={d.URL}>{d.URLName}</a>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
