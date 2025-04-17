import React from 'react';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-light-grey font-sans">
      <CanvasBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />      
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;