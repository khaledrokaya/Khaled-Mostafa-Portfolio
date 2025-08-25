import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import ProjectsPage from './components/ProjectsPage';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Component to handle hash navigation
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Remove the # from the hash
      const elementId = location.hash.substring(1);
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash, location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToHash />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Education />
                <Skills />
                <Experience />
                <Services />
                <Projects />
                <Certificates />
                <Contact />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;

