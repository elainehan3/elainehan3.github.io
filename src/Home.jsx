
import Intro from './pages/HomePage/intro/Intro'
import AboutMe from './pages/HomePage/aboutSmall/AboutSmall'
//import Skills from './pages/HomePage/skills/Skills'
import Projects from './pages/HomePage/projectList/ProjectList'
import Experience from './pages/HomePage/experience/Experience'
//import Testimonials from './pages/testimonials/Testimonials'
import './page.scss'

function Home() {
  return (
    <div className="page">
      <div className="page-sections">
        <Intro />
        <div className="no-space-sections">
          <AboutMe />
          <Projects />
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default Home;
