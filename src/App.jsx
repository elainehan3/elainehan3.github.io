import './app.scss'
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Topbar from './components/topbar/Topbar'
import Menu from "./components/menu/Menu";
import Contact from './components/contact/Contact'
import Home from './Home';
import About from './About';
import ProjectPage from './ProjectPage';
import FunStuff from './FunStuff';

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
         <Routes> 
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/projects' element={<ProjectPage />}></Route>
          <Route exact path='/fun' element={<FunStuff />}></Route>
        </Routes>  
        <Contact/>
      </div>
    </div>
  );
}

export default App;
