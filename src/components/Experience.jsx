import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "MERN Stack Developer",
      company: "Sarayu Infotech Solution Pvt Ltd",
      location: "Bangalore, India",
      period: "Feb 2024 – Present",
      duration: "2 Years",
      type: "Full-time",
      logo: "🏢",
      responsibilities: [
        "Designed, developed, and maintained full-stack MERN web applications for real-time industrial equipment monitoring",
        "Contributed to system architecture ensuring scalable, efficient, and modular IoT-based solutions",
        "Crafted responsive React-based dashboards with charts, graphs, and tabular reports",
        "Built backend APIs with Node.js & Express.js handling real-time MQTT data ingestion",
        "Integrated intelligent threshold-based alerting with automated email notifications",
        "Implemented role-based access control for multi-organization support",
        "Ensured scalable deployment using AWS and Docker for secure remote access"
      ],
      achievements: [
        {
          icon: "⚡",
          title: "40% Performance Gain",
          description: "Boosted real-time sensor data processing efficiency through optimized MQTT protocol integration"
        },
        {
          icon: "🏆",
          title: "Project Leadership",
          description: "Led full-cycle development of MERN-based IoT monitoring platform across 3 industrial setups"
        },
        {
          icon: "✅",
          title: "85% Test Coverage",
          description: "Improved API reliability by raising test coverage from 60% to 85% using Postman"
        }
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "MQTT", "AWS", "Docker"]
    }
  ];

  return (
    <section id="experience">
      <div className="reveal">
        <span className="section-tag">// work experience</span>
        <h2 className="section-title">Where I've <span>Worked</span></h2>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="experience-item reveal" style={{transitionDelay: `${index * 0.2}s`}}>
            <div className="exp-timeline-dot">
              <div className="exp-logo">{exp.logo}</div>
            </div>
            
            <div className="exp-card-enhanced">
              <div className="exp-header-enhanced">
                <div className="exp-main-info">
                  <h3 className="exp-role-enhanced">{exp.role}</h3>
                  <div className="exp-company-enhanced">
                    <span className="exp-company-name">{exp.company}</span>
                    <span className="exp-location">📍 {exp.location}</span>
                  </div>
                </div>
                <div className="exp-meta">
                  <div className="exp-period-enhanced">
                    <span className="exp-duration">{exp.duration}</span>
                    <span className="exp-date">{exp.period}</span>
                  </div>
                  <span className="exp-type">{exp.type}</span>
                </div>
              </div>

              <div className="exp-content">
                <div className="exp-section">
                  <h4 className="exp-section-title">🎯 Key Responsibilities</h4>
                  <ul className="exp-responsibilities">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="exp-responsibility-item">
                        <span className="exp-bullet">▸</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="exp-section">
                  <h4 className="exp-section-title">🏆 Key Achievements</h4>
                  <div className="achievements-enhanced">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="achievement-enhanced">
                        <div className="achievement-icon">{achievement.icon}</div>
                        <div className="achievement-content">
                          <h5 className="achievement-title">{achievement.title}</h5>
                          <p className="achievement-desc">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="exp-section"> */}
                  {/* <h4 className="exp-section-title">🛠️ Technologies Used</h4> */}
                  {/* <div className="tech-stack-used"> */}
                    {/* {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-used-item">
                        {tech}
                      </span>
                    ))} */}
                  {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
