import React from 'react';

const Education = () => {
  return (
    <section id="education">
      <div className="reveal">
        <span className="section-tag">// education</span>
        <h2 className="section-title">Academic <span>Background</span></h2>
      </div>
      <div className="edu-card reveal">
        <div className="edu-header">
          <div className="edu-degree">Bachelor of Engineering</div>
          <div className="edu-period">2019 – 2023</div>
        </div>
        <div className="edu-school">Computer Science and Engineering</div>
        <div className="edu-college">Bahubali College of Engineering</div>
        <div className="edu-cgpa">CGPA: 7.8</div>
        <div className="edu-details">
          <p>Completed comprehensive studies in computer science fundamentals, software engineering principles, and advanced programming concepts. Gained hands-on experience with full-stack development, database management, and modern web technologies.</p>
          <div className="edu-highlights">
            <h4>Key Focus Areas:</h4>
            <ul>
              <li>Data Structures & Algorithms</li>
              <li>Web Development & Frameworks</li>
              <li>Database Systems & Management</li>
              <li>Software Engineering & Design Patterns</li>
              <li>Cloud Computing & DevOps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
