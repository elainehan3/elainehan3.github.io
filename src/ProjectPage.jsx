
import './page.scss'
import ProjectAcc from './pages/ProjectPage/projectAcc/ProjectAcc'

function ProjectPage() {
  return (
    <div className="page">
      <div className="page-sections">
        <div className="textSection">
          <h1>Projects</h1>
          <div className="divider">_________________________________________</div>
        </div>
        <ProjectAcc />
      </div>
    </div>
  );
}

export default ProjectPage;
