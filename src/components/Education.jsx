import React from 'react';

const Education = () => {
  return (
    <section id="education">
      <div className="reveal">
        <span className="section-tag">// education</span>
        <h2 className="section-title">Academic <span>Background</span></h2>
      </div>

      <div className="edu-card reveal">
        <div className="edu-icon">🎓</div>
        <div>
          <div className="edu-degree">Bachelor of Engineering (B.E)</div>
          <div className="edu-uni">Visvesvaraya Technological University, Belgaum</div>
          <div className="edu-period">Aug 2019 – Jun 2023</div>
        </div>
      </div>
    </section>
  );
};

export default Education;
