import { experiences } from "../data/experienceData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section">
      <div className="page-shell">
        <div className="section-heading section-heading--split">
          <div><span className="section-kicker">03 / Experience</span><h2>Built through practice.</h2></div>
          <p>Experience across product teams, IT operations, field engineering and fabrication workshops.</p>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-row" key={`${experience.company}-${experience.title}`}>
              <span className="experience-index">0{index + 1}</span>
              <div className="experience-role">
                <h3>{experience.title}</h3><p>{experience.company}</p>
              </div>
              <div className="experience-details">
                <div className="experience-meta"><span>{experience.type}</span><time>{experience.date}</time></div>
                <ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
