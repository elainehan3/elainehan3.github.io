import './page.scss';
import Resume from './pages/Resume/Resume';


export default function ResumePage() {
  return (
    <div className="page">
      <div className="page-sections">
        <div className="textSection">
          <h1>Resume</h1>
          <div className="divider">_________________________</div>
        </div>
        <Resume />
      </div>
    </div>
  );
}
