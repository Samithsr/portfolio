import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="reveal">
        <span className="section-tag">// technical skills</span>
        <h2 className="section-title">My <span>Tech</span> Stack</h2>
      </div>
      <div className="skills-grid reveal">
        <div className="skill-category">
          <div className="skill-cat-header">
            <div className="skill-cat-icon cyan">⚛️</div>
            <span className="skill-cat-name">Front-End</span>
          </div>
          <div className="skill-tags">
            <span className="skill-tag cyan">React.js</span>
            <span className="skill-tag cyan">JavaScript ES6+</span>
            <span className="skill-tag cyan">Redux</span>
            <span className="skill-tag cyan">React Hooks</span>
            <span className="skill-tag cyan">HTML5</span>
            <span className="skill-tag cyan">CSS3</span>
            <span className="skill-tag cyan">Bootstrap</span>
            <span className="skill-tag cyan">Tailwind CSS</span>
          </div>
        </div>

        <div className="skill-category">
          <div className="skill-cat-header">
            <div className="skill-cat-icon purple">⚙️</div>
            <span className="skill-cat-name">Back-End</span>
          </div>
          <div className="skill-tags">
            <span className="skill-tag purple">Node.js</span>
            <span className="skill-tag purple">Express.js</span>
            <span className="skill-tag purple">RESTful APIs</span>
            <span className="skill-tag purple">MQTT Protocol</span>
            <span className="skill-tag purple">Socket.IO</span>
            <span className="skill-tag purple">Redis</span>
          </div>
        </div>

        <div className="skill-category">
          <div className="skill-cat-header">
            <div className="skill-cat-icon amber">🗄️</div>
            <span className="skill-cat-name">Database</span>
          </div>
          <div className="skill-tags">
            <span className="skill-tag amber">MongoDB</span>
            <span className="skill-tag amber">Mongoose ODM</span>
            <span className="skill-tag amber">Data Modeling</span>
          </div>
        </div>

        <div className="skill-category">
          <div className="skill-cat-header">
            <div className="skill-cat-icon green">🛠️</div>
            <span className="skill-cat-name">DevOps & Tools</span>
          </div>
          <div className="skill-tags">
            <span className="skill-tag green">AWS</span>
            <span className="skill-tag green">EC2</span>
            <span className="skill-tag green">IAM CI/CD</span>
            <span className="skill-tag green">Docker</span>
            <span className="skill-tag green">GitHub</span>
            <span className="skill-tag green">Postman</span>
            <span className="skill-tag green">Git</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
