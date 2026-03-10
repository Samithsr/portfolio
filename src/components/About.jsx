import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="reveal">
        <p className="section-label">Introduction</p>
        <h2 className="section-heading">Overview<span className="dot">.</span></h2>
      </div>
      <p className="about-desc reveal">
        I'm a skilled <strong>MERN Stack Developer</strong> with <strong>2+ years</strong> of hands-on experience building scalable, high-performance web applications. I specialize in <strong>React.js</strong> front-end development, creating intuitive interfaces and implementing robust architectures. Proficient in full-stack development using <strong>Node.js, Express.js, and MongoDB</strong>, with proven expertise in IoT-based real-time systems, RESTful API design, MQTT protocol integration, and cloud deployment on <strong>AWS with Docker</strong>. Passionate about delivering seamless user experiences through clean, maintainable code.
      </p>
      <div className="cards-row">
        <div className="service-card reveal" style={{transitionDelay:'0.05s'}}>
          <div className="service-icon">🌐</div>
          <div className="service-name">Web Developer</div>
        </div>
        <div className="service-card reveal" style={{transitionDelay:'0.1s'}}>
          <div className="service-icon">⚙️</div>
          <div className="service-name">Backend Developer</div>
        </div>
        <div className="service-card reveal" style={{transitionDelay:'0.2s'}}>
          <div className="service-icon">📡</div>
          <div className="service-name">IoT Integration</div>
        </div>
        <div className="service-card reveal" style={{transitionDelay:'0.25s'}}>
          <div className="service-icon">📨</div>
          <div className="service-name">MQTT Protocol</div>
        </div>
        <div className="service-card reveal" style={{transitionDelay:'0.3s'}}>
          <div className="service-icon">⚡</div>
          <div className="service-name">Redis Cache</div>
        </div>
        <div className="service-card reveal" style={{transitionDelay:'0.35s'}}>
          <div className="service-icon">☁️</div>
          <div className="service-name">Cloud & DevOps</div>
        </div>
      </div>
    </section>
  );
};

export default About;
