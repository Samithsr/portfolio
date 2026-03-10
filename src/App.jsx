import React, { useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useCursorEffect, useStarsCanvas, useScrollReveal, useNavActive } from './hooks/useEffects';

const App = () => {
  useCursorEffect();
  useStarsCanvas();
  useScrollReveal();
  useNavActive(2500);
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Nunito:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>

      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
      <canvas id="stars-canvas"></canvas>

      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
