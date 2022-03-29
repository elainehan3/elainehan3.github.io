import './page.scss'
import Weather from './components/FunStuff/weather/Weather';

function FunStuff() {
  return (
     <div className="page">
     <div className="sections">
      <Weather/>
     </div>
    </div>
  );
}

export default FunStuff;
