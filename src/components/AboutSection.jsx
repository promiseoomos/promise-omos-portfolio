import { ArrowUpRight } from "lucide-react";
import { certifications, education } from "../data/siteData";
import { skills } from "../data/skillsData";

export default function AboutSection() {
  return (
    <>
      <section id="expertise" className="section expertise-section">
        <div className="page-shell">
          <div className="section-heading section-heading--split">
            <div><span className="section-kicker">02 / Capabilities</span><h2>One engineer.<br />Two disciplines.</h2></div>
            <p>The precision of mechanical engineering meets the speed and scalability of modern software delivery.</p>
          </div>
          <div className="expertise-grid">
            {skills.map((skill) => (
              <article className="expertise-card" key={skill.category}>
                <div className="expertise-card-top"><span>{skill.index}</span><ArrowUpRight size={20} /></div>
                <h3>{skill.category}</h3>
                <p>{skill.description}</p>
                <div className="tag-list tag-list--dark">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section about-section section-grid">
        <div className="page-shell about-layout">
          <div className="about-statement">
            <span className="section-kicker">04 / About</span>
            <h2>Built for the space between<span>physical systems and digital products.</span></h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">I’m Promise Omorotionmwan, a results-driven Mechanical and Software Engineer who approaches every challenge as a system: understand the constraints, find the leverage, and build for reliability.</p>
            <p>My work spans enterprise software architecture, responsive product development, heavy-equipment maintenance, thermal design, fabrication and HSE-led field operations. That range gives me a practical perspective on how technology performs beyond the screen.</p>
          </div>
          <div className="credentials-grid">
            <div className="credential-block">
              <span className="credential-label">Education</span>
              {education.map((item) => (
                <div className="education-item" key={item.degree}>
                  <span>{item.date}</span><h3>{item.degree}</h3><p>{item.school}</p><small>{item.detail}</small>
                </div>
              ))}
            </div>
            <div className="credential-block">
              <span className="credential-label">Selected certifications</span>
              <ul className="certification-list">
                {certifications.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
