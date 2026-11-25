import { ArrowUpRight, Github, LockKeyhole } from "lucide-react";
import { projects } from "../data/projectsData";

function ProjectVisual({ project }) {
  return (
    <div className={`project-visual project-visual--${project.theme}`} aria-hidden="true">
      <span className="visual-index">{project.number}</span>
      <div className="visual-window">
        <div className="visual-window-bar"><i /><i /><i /></div>
        <div className="visual-window-body">
          <span className="visual-line visual-line--wide" />
          <span className="visual-line" />
          <div className="visual-modules"><i /><i /><i /></div>
          <div className="visual-chart"><i /><i /><i /><i /><i /></div>
        </div>
      </div>
      <span className="visual-caption">ENGINEERED / DELIVERED</span>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="work" className="section section-grid work-section">
      <div className="page-shell">
        <div className="section-heading section-heading--split">
          <div><span className="section-kicker">01 / Selected work</span><h2>Proof, not promises.</h2></div>
          <p>A selection of software products and engineered systems designed to solve real operational problems.</p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <ProjectVisual project={project} />
              <div className="project-content">
                <div className="project-meta"><span>{project.client}</span><span>{project.status}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-outcome">{project.outcome}</div>
                <div className="tag-list">
                  {project.tech.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-links">
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Visit live project <ArrowUpRight size={16} /></a>}
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={15} /> Source</a>}
                  {!project.liveUrl && !project.githubUrl && <span className="confidential-note"><LockKeyhole size={14} /> Details available on request</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
