import './page.scss';
import Resume from './pages/Resume/Resume';
import ResumeDev from './pages/Resume/ResumeDev';


export default function ResumePage(dev) {
  return (
    <div className="page">
      <div className="page-sections">
        <div className="textSection">
          <h1>Resume</h1>
          <div className="divider">_________________________</div>
        </div>
        {dev === "true" ? <ResumeDev /> : <Resume />}

      </div>
    </div>
  );
}
