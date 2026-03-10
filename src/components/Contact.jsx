import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-wrapper reveal">
        <span className="section-tag">// get in touch</span>
        <h2 className="section-title">Let's Work <span>Together</span></h2>
        <p style={{color: 'var(--muted)', fontSize: '1.02rem', lineHeight: '1.8', marginTop: '-1rem'}}>
          I'm currently open to new opportunities — whether it's a full-time role, freelance project, or just a conversation about tech. My inbox is always open.
        </p>
        <div className="contact-links">
          <a href="mailto:samithrgowda@gmail.com" className="contact-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-10 7L2 7"/>
            </svg>
            samithrgowda@gmail.com
          </a>
          <a href="tel:+919380780049" className="contact-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13 1 .4 1.97.71 2.93a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l.98-.96a2 2 0 0 1 2.11-.45c.96.31 1.93.58 2.93.71A2 2 0 0 1 22 16.92z"/>
            </svg>
            +91 9380780049
          </a>
          <a href="https://linkedin.com/in/samith-s-r-b41bb926a" target="_blank" rel="noreferrer" className="contact-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn Profile
          </a>
          <a href="https://github.com/samithsr" target="_blank" rel="noreferrer" className="contact-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
