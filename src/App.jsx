import './app.scss'
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Topbar from './pages/HeaderFooter/topbar/Topbar'
import Menu from "./pages/HeaderFooter/menu/Menu";
import Contact from './pages/HeaderFooter/contact/Contact'
import Home from './Home';
import About from './About';
import ProjectPage from './ProjectPage';
import FunStuff from './FunStuff';
import ResumePage from './ResumePage';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [color, setColor] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  }
  window.addEventListener('scroll', changeNavbarColor);
  // // only for building resume
  // if (location.pathname === "/resumeonly") {
  //   return (
  //     <div className="app">
  //       <ResumeOnly />
  //     </div>
  //   );
  // } else {
  // //erase above in commit
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} setColor={setColor}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/projects' element={<ProjectPage />}></Route>
          <Route exact path='/showcase' element={<FunStuff />}></Route>
          <Route exact path='/resume' element={<ResumePage dev="false" />}></Route>
          <Route exact path='/dev' 
          element={
            (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? <ResumePage dev="true" /> : <ResumePage dev="false"/>
            }>
          </Route>
        </Routes>
        <Contact />
        <img src="assets/border2.png" alt="" className="background-flower-top" />
        <img src="assets/border.png" alt="" className="background-flower-bottom" />
      </div>
    </div>
  );
}

export default App;

