import Navbar from "./components/NavBarSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
