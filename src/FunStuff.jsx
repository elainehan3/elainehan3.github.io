import './page.scss'
import Weather from './pages/FunStuff/weather/Weather';
import FindNeedle from './pages/FunStuff/findNeedle/FindNeedle';

function FunStuff() {
  return (
    <div className="page">
      <div className="page-sections">
        <div className="textSection">
          <h1>Fun Projects</h1>
          <div className="divider">_________________________________________</div>
        </div>
        <div className='no-space-sections'>
          <Weather />
          <FindNeedle />
        </div>
      </div>
    </div>
  );
}

export default FunStuff;
