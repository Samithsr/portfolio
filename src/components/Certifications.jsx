import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Java Full Stack Development",
      issuer: "Kodnest",
      date: "2023",
      duration: "6 months",
      credentialId: "KOD-JAVA-2023",
      image: "☕",
      skills: ["Java", "Spring Boot", "Hibernate", "REST APIs", "MySQL", "HTML/CSS/JS"],
      verificationLink: "#"
    },
    {
      id: 2,
      title: "ServiceNow Developer",
      issuer: "ServiceNow",
      date: "2023",
      duration: "3 months",
      credentialId: "SN-DEV-2023",
      image: "⚙️",
      skills: ["ServiceNow Platform", "JavaScript", "Glide API", "Workflow", "Scripting", "Integration"],
      verificationLink: "#"
    },
    // {
    //   id: 3,
    //   title: "Full Stack Web Development",
    //   issuer: "Coursera",
    //   date: "2024",
    //   duration: "3 months",
    //   credentialId: "ABC123XYZ",
    //   image: "🏆",
    //   skills: ["React", "Node.js", "MongoDB", "Express.js"],
    //   verificationLink: "#"
    // },
    // {
    //   id: 4,
    //   title: "AWS Cloud Practitioner",
    //   issuer: "Amazon Web Services",
    //   date: "2023",
    //   duration: "2 months",
    //   credentialId: "AWS-2023-456",
    //   image: "☁️",
    //   skills: ["AWS", "Cloud Computing", "Security", "Networking"],
    //   verificationLink: "#"
    // },
    // {
    //   id: 5,
    //   title: "MongoDB Developer Associate",
    //   issuer: "MongoDB University",
    //   date: "2023",
    //   duration: "1 month",
    //   credentialId: "MDB-DEV-789",
    //   image: "🍃",
    //   skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation"],
    //   verificationLink: "#"
    // },
    // {
    //   id: 6,
    //   title: "React Advanced Patterns",
    //   issuer: "Udemy",
    //   date: "2023",
    //   duration: "2 months",
    //   credentialId: "UD-REACT-012",
    //   image: "⚛️",
    //   skills: ["React Hooks", "Redux", "Performance", "Testing"],
    //   verificationLink: "#"
    // }
  ];

  return (
    <section id="certifications">
      <div className="reveal">
        <span className="section-tag">// certifications</span>
        <h2 className="section-title">Professional <span>Certifications</span></h2>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div 
            key={cert.id} 
            className="cert-card reveal" 
            style={{transitionDelay: `${index * 0.1}s`}}
          >
            <div className="cert-header">
              <div className="cert-icon">{cert.image}</div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                  {cert.duration && <span className="cert-duration">{cert.duration}</span>}
                </div>
              </div>
            </div>
            
            <div className="cert-content">
              <div className="cred-id">
                <span className="cred-label">Credential ID:</span>
                <span className="cred-value">{cert.credentialId}</span>
              </div>
              
              <div className="cert-skills">
                <h4 className="skills-title">Skills Covered:</h4>
                <div className="skills-list">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="cert-actions">
                <a href={cert.verificationLink} className="btn-verify">
                  <span>🔍</span>
                  Verify Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
