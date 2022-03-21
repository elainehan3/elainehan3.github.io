import "./experience.scss";

export default function AboutMe() {
  const data = [
    {
      id: "1",
      icon: "https://media-exp1.licdn.com/dms/image/C4E0BAQHda-o9KT2w5Q/company-logo_200_200/0/1625689676984?e=2147483647&v=beta&t=y4-UjyA7OEgXO-8QfS0XFMZcQg8Ku-1k3P3Ux_nu-2M",
      icon2: "https://upload.wikimedia.org/wikipedia/commons/2/2b/DeloitteNewSmall.png",
      title: "Cyber Security Intern",
      company: "Deloitte",
      duration: "Sep. 2021 - Dec. 2021",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/2/2b/DeloitteNewSmall.png",
        //"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/440px-Deloitte.svg.png"
    },
    {
      id: "2",
      icon: "./assets/idealab.jpeg",
      title: "STEM Instructor",
      company: "Idea Lab",
      duration: "Sep. 2019 - Dec. 2020",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "./assets/idealab.jpeg",
    },
  ];
  
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <div
        className="slider"
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
              <div className="left">
                <div className="leftContainer">
                  <span>{d.duration}</span>
                  <div className="companyContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h3>{d.company}</h3>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
