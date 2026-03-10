import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="reveal">
        <span className="section-tag">// featured projects</span>
        <h2 className="section-title">Things I've <span>Built</span></h2>
      </div>

      <div className="project-card reveal">
        <div className="project-header">
          <div className="project-icon">🏭</div>
        </div>
        <div className="project-name">IoT-Based Real-Time Industrial Equipment Monitoring System</div>
        <div className="project-tech">
          <span className="tech-tag">React.js</span>
          <span className="tech-tag">Node.js</span>
          <span className="tech-tag">Express.js</span>
          <span className="tech-tag">MongoDB</span>
          <span className="tech-tag">MQTT</span>
          <span className="tech-tag">Redux</span>
          <span className="tech-tag">AWS</span>
          <span className="tech-tag">Docker</span>
        </div>
        <p className="project-desc">
          An advanced full-stack web platform for monitoring industrial equipment in remote locations using IoT technology. The system streams real-time sensor data via MQTT, visualizes it through dynamic dashboards, and alerts operators when safety thresholds are breached — deployed on AWS for global remote accessibility.
        </p>
        <div className="project-features">
          <div className="proj-feat">Real-time MQTT data streaming (vibration, voltage, temperature)</div>
          <div className="proj-feat">Dynamic React.js dashboards with charts &amp; graphical views</div>
          <div className="proj-feat">Threshold-based email alerting for proactive maintenance</div>
          <div className="proj-feat">Multi-organization access with role-based user management</div>
          <div className="proj-feat">Modular MERN architecture for seamless device integration</div>
          <div className="proj-feat">Historical data analysis &amp; exportable audit reports</div>
          <div className="proj-feat">Secure cloud hosting on AWS with Docker containers</div>
          <div className="proj-feat">Deployed across wind turbines, dams &amp; off-grid power stations</div>
        </div>
      </div>

      {/* IoT Config Platform card */}
      <div className="project-card reveal" style={{marginTop: '1.5rem'}}>
        <div className="project-header">
          <div className="project-icon">🌐</div>
        </div>
        <div className="project-name">IoT Device Configuration &amp; Management Platform</div>
        <div className="project-tech">
          <span className="tech-tag">React.js</span>
          <span className="tech-tag">Node.js</span>
          <span className="tech-tag">Express.js</span>
          <span className="tech-tag">MongoDB</span>
          <span className="tech-tag">MQTT</span>
          <span className="tech-tag">Socket.IO</span>
          <span className="tech-tag">Bootstrap</span>
          <span className="tech-tag">JWT</span>
        </div>
        <p className="project-desc">
          A full-stack IoT platform for configuring and managing MQTT-based devices with real-time bidirectional communication. Features JWT-secured authentication, live WebSocket updates via Socket.IO, OTA firmware deployment, remote WiFi configuration, and broker management — enabling seamless remote control of connected hardware.
        </p>
        <div className="project-features">
          <div className="proj-feat">MQTT broker management with connection validation</div>
          <div className="proj-feat">JWT-based auth with role-based access control</div>
          <div className="proj-feat">Live device updates via Socket.IO WebSocket</div>
          <div className="proj-feat">Over-the-air (OTA) firmware deployment</div>
          <div className="proj-feat">Remote WiFi network configuration</div>
          <div className="proj-feat">MQTT pub/sub topic management</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
