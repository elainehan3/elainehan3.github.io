import { HashLink as Link } from 'react-router-hash-link';
import './page.scss'
import KaraokeRoom from './pages/FunStuff/karaokeRoom/KaraokeRoom';
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
        <div className="textSection">
        <p>On this page: </p>
        <Link to="#karaokeroom">Karaoke Room</Link>
        <Link to="#weather">Weather</Link>
        <Link to="#findneedle">Needle In A Haystack</Link>
        </div>
        <div className='no-space-sections'>
          <KaraokeRoom />
          <Weather />
          <FindNeedle />
        </div>
      </div>
    </div>
  );
}

export default FunStuff;
