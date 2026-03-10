import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <a href="#hero" className="nav-brand">
        <div className="nav-logo-icon">S</div>
        <span className="nav-brand-text"><strong>Samith</strong> | S R</span>
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Work</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
