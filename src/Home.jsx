
import Intro from './components/HomePage/intro/Intro'
import AboutMe from './components/HomePage/aboutSmall/AboutSmall'
import Skills from './components/HomePage/skills/Skills'
import Projects from './components/HomePage/projectList/ProjectList'
import Experience from './components/HomePage/experience/Experience'
import Activities from './components/HomePage/activities/Activities'
import './page.scss'

function Home() {
  return (
    <div className="page">
     <div className="sections">
       <Intro/>
       <AboutMe/>
       <Skills/>
       <Projects/>
       <Experience/>
       <Activities/>
     </div>
    </div>
  );
}

export default Home;
