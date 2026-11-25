import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { stats } from "../data/statsData";
import { scrollToSection } from "../utils/scrollToSection";

export default function HeroSection() {
  return (
    <section id="home" className="hero section-grid">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-inner page-shell">
        <div className="hero-copy reveal-up">
          <div className="eyebrow-row">
            <span className="status-dot" />
            <span>Mechanical × Software Engineer</span>
            <span className="hero-location"><MapPin size={13} /> Port Harcourt, NG</span>
          </div>

          <h1>I engineer systems<span>that perform.</span></h1>

          <div className="hero-bottom-copy">
            <p>
              Promise Omorotionmwan builds dependable digital products and
              field-ready engineering solutions—from enterprise platforms to
              thermal systems.
            </p>
            <div className="hero-actions">
              <button className="button button--primary" onClick={() => scrollToSection("work")}>
                Explore selected work <ArrowDownRight size={18} />
              </button>
              <a className="text-link" href="mailto:promiseoomos@gmail.com">
                Discuss an opportunity <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-instrument" aria-label="Professional impact summary">
          <div className="instrument-top">
            <span>PERFORMANCE / 2026</span>
            <span className="instrument-live">LIVE</span>
          </div>
          <div className="instrument-orbit" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit-core">PO</div>
            <span className="orbit-label orbit-label-one">BUILD</span>
            <span className="orbit-label orbit-label-two">OPTIMISE</span>
            <span className="orbit-label orbit-label-three">DELIVER</span>
          </div>
          <div className="instrument-meta">
            <span>Software architecture</span>
            <span>Mechanical systems</span>
            <span>Operational reliability</span>
          </div>
        </div>

        <div className="metrics-grid">
          {stats.map((stat) => (
            <div className="metric" key={stat.label}>
              <strong>{stat.number}</strong><span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
