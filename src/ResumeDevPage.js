import './page.scss';
import ResumeDev from './pages/Resume/ResumeDev';


export default function ResumeDevPage() {
  return (
    <div className="page">
      <div className="page-sections">
        <div className="textSection">
          <h1>Resume DEV</h1>
          <div className="divider">_________________________</div>
        </div>
        <ResumeDev />
      </div>
    </div>
  );
}
