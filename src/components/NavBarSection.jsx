import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { scrollToSection } from "../utils/scrollToSection";

const navigation = [
  ["work", "Work"],
  ["expertise", "Expertise"],
  ["experience", "Experience"],
  ["about", "About"],
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <nav className="nav-shell" aria-label="Primary navigation">
        <button className="wordmark" onClick={() => goTo("home")} aria-label="Go to home">
          <span className="wordmark-mark">PO</span>
          <span className="wordmark-name">Promise Omorotionmwan</span>
        </button>

        <div className="nav-links">
          {navigation.map(([id, label]) => (
            <button key={id} onClick={() => goTo(id)}>{label}</button>
          ))}
        </div>

        <button className="nav-cta" onClick={() => goTo("contact")}>
          Start a conversation <ArrowUpRight size={16} />
        </button>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu">
          {navigation.map(([id, label], index) => (
            <button key={id} onClick={() => goTo(id)}>
              <span>0{index + 1}</span>{label}
            </button>
          ))}
          <button className="mobile-contact" onClick={() => goTo("contact")}>
            Start a conversation <ArrowUpRight size={18} />
          </button>
        </div>
      )}
    </header>
  );
}
