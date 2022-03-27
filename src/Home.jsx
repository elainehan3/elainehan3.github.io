
import Intro from './components/Home/intro/Intro'
import AboutMe from './components/Home/aboutMe/AboutMe'
import Skills from './components/Home/skills/Skills'
import Gallery from './components/gallery/Gallery'
import Projects from './components/Home/projectList/ProjectList'
import Experience from './components/Home/experience/Experience'
import Activities from './components/Home/activities/Activities'
import './page.scss'
// import { useState } from "react";
// import Menu from "./components/menu/Menu";

function Home() {
  //const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="page">
     <div className="sections">
       <Intro/>
       <AboutMe/>
       <Skills/>
       <Projects/>
       <Experience/>
       <Activities/>
       <Gallery/>
     </div>
    </div>
  );
}

export default Home;
