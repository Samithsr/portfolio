import React from 'react';

const TechStackTimeline = () => {
  const techData = [
    {
      category: "Frontend",
      icon: "⚛️",
      color: "cyan",
      position: "left",
      technologies: [
        "React.js",
        "JavaScript ES6+",
        "Redux",
        "React Hooks",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS"
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      color: "purple",
      position: "right",
      technologies: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "MQTT Protocol",
        "Socket.IO",
        "Redis"
      ]
    },
    {
      category: "Database",
      icon: "🗄️",
      color: "amber",
      position: "left",
      technologies: [
        "MongoDB",
        "Mongoose ODM",
        "Data Modeling"
      ]
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      color: "green",
      position: "right",
      technologies: [
        "AWS",
        "EC2",
        "IAM CI/CD",
        "Docker",
        "Linux",
        "Bash Scripting",
        "SSH",
        "Vim/NeoVim",
        "GitHub",
        "Postman",
        "Git"
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="reveal">
        <span className="section-tag">// technical skills</span>
        <h2 className="section-title">My <span>Tech</span> Stack</h2>
      </div>

      <div className="tech-timeline">
        {techData.map((tech, index) => (
          <div 
            key={tech.category} 
            className={`tech-timeline-item ${tech.position} reveal`}
            style={{transitionDelay: `${index * 0.1}s`}}
          >
            <div className="tech-timeline-dot">
              <div className={`tech-icon ${tech.color}`}>
                {tech.icon}
              </div>
            </div>
            <div className="tech-timeline-date">
              {tech.category}
            </div>
            <div className="tech-card">
              <div className="tech-header">
                <h3 className="tech-category">{tech.category}</h3>
              </div>
              <div className="tech-list">
                {tech.technologies.map((techName, techIndex) => (
                  <div key={techIndex} className={`tech-item ${tech.color}`}>
                    <span className="tech-bullet">▸</span>
                    {techName}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackTimeline;
