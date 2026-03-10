import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <a href="#hero" className="nav-brand">
        <div className="nav-logo-icon">S</div>
        <span className="nav-brand-text"><strong>Samith</strong> | S R</span>
      </a>
      <ul className="nav-links">
        <li><a href="#hero" className="nav-link">Home</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#skills" className="nav-link">Skills</a></li>
        <li><a href="#experience" className="nav-link">Experience</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#certifications" className="nav-link">Certifications</a></li>
        <li><a href="#education" className="nav-link">Education</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
