import './page.scss'
import Weather from './components/FunStuff/weather/Weather';
import FSHeader from './components/FunStuff/fsheader/FSHeader';
import FindNeedle from './components/FunStuff/findNeedle/FindNeedle';

function FunStuff() {
  return (
     <div className="page">
     <div className="sections">
      <FSHeader/>
      <Weather/>
      <FindNeedle/>
     </div>
    </div>
  );
}

export default FunStuff;
