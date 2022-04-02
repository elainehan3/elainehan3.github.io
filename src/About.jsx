import AboutMe from './pages/AboutPage/aboutLarge/AboutLarge'
import Tabs from './pages/AboutPage/tabs/Tabs'
import './page.scss'

function About() {
  return (
     <div className="page">
      <div className="page-sections">
        <AboutMe/>
        <Tabs/>
      </div>
    </div>
  );
}

export default About;
