
import About from "./components/portfolio/About.jsx";
import Certifications from "./components/portfolio/Certifications.jsx";
import Contact from "./components/portfolio/Contact.jsx";
import Education from "./components/portfolio/Education.jsx";
import Footer from "./components/portfolio/Footer.jsx";
import Hero from "./components/portfolio/Hero.jsx";
import Nav from "./components/portfolio/Nav.jsx";
import Philosophy from "./components/portfolio/Philosophy.jsx";
import Projects from "./components/portfolio/Projects.jsx";
import Skills from "./components/portfolio/Skills.jsx";

function App() {
  return (
    <div className="portfolio-shell">
      <Nav />

      <main>
        <Hero />
        <About />
        <Philosophy />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
