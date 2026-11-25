import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "../data/siteData";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section section-grid">
      <div className="page-shell contact-inner">
        <div className="contact-kicker"><span className="status-dot" /> Available for ambitious engineering work</div>
        <h2>Have a system that needs to work better?</h2>
        <a className="contact-email" href={`mailto:${contact.email}`}>
          {contact.email}<ArrowUpRight />
        </a>
        <div className="contact-footer">
          <div className="contact-detail"><MapPin size={17} /><span>{contact.location}<small>Open to remote & on-site roles</small></span></div>
          <div className="contact-links">
            <a href={`tel:${contact.phone}`}><Phone size={16} />{contact.phoneLabel}</a>
            <a href={contact.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
            <a href={`mailto:${contact.email}`}><Mail size={16} />Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
