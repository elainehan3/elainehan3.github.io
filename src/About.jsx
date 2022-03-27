import AboutMe from './components/AboutPage/aboutLarge/AboutLarge'
import Gallery from './components/AboutPage/gallery/Gallery'
import './page.scss'

function About() {
  return (
     <div className="page">
      <div className="sections">
        <AboutMe/>
        <Gallery/>
      </div>
    </div>
  );
}

export default About;
