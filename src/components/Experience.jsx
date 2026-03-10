import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <div className="reveal">
        <span className="section-tag">// work experience</span>
        <h2 className="section-title">Where I've <span>Worked</span></h2>
      </div>

      <div className="exp-card reveal">
        <div className="exp-header">
          <div>
            <div className="exp-role">MERN Stack Developer</div>
            <div className="exp-company">Sarayu Infotech Solution Pvt Ltd &nbsp;·&nbsp; Bangalore, India</div>
          </div>
          <span className="exp-period">Feb 2024 – Present · 2 Years</span>
        </div>

        <ul className="exp-list">
          <li>Designed, developed, and maintained full-stack MERN web applications tailored for real-time industrial equipment monitoring.</li>
          <li>Actively contributed to system architecture ensuring scalable, efficient, and modular solutions for IoT-based environments.</li>
          <li>Crafted responsive React-based dashboards to visualize sensor data with charts, graphs, and tabular reports.</li>
          <li>Built backend APIs with Node.js & Express.js handling real-time data ingestion via MQTT from remote IoT devices (vibration, voltage, temperature).</li>
          <li>Integrated intelligent threshold-based alerting that triggers automated email notifications for proactive maintenance.</li>
          <li>Built role-based access control with multi-organization support for wind turbines, dams, and remote stations.</li>
          <li>Ensured scalable deployment using AWS and Docker for secure remote access to industrial operations.</li>
        </ul>

        <div className="achievements-grid" style={{marginTop: '2.5rem'}}>
          <div className="achievement-item">
            <h4>⚡ 40% Performance Gain</h4>
            <p>Boosted real-time sensor data processing efficiency through optimized MQTT protocol integration.</p>
          </div>
          <div className="achievement-item">
            <h4>🏆 Project Leadership</h4>
            <p>Led full-cycle development of MERN-based IoT monitoring platform deployed across 3 distinct industrial setups.</p>
          </div>
          <div className="achievement-item">
            <h4>✅ 85% Test Coverage</h4>
            <p>Improved API reliability by raising test coverage from 60% to 85% using Postman, reducing production bugs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
