import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          e.target.style.transitionDelay = (i * 0.07) + 's';
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.08 });
    reveals.forEach(el => io.observe(el));

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const handleScroll = () => {
      let cur = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) cur = s.id;
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + cur ? '#00e5ff' : '';
      });
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          --bg: #0a0a0f;
          --surface: #111118;
          --surface2: #1a1a24;
          --border: #ffffff0f;
          --accent: #00e5ff;
          --accent2: #7c3aed;
          --accent3: #f59e0b;
          --text: #f0f0f5;
          --muted: #8888a0;
          --card-bg: #13131e;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          overflow-x: hidden;
        }

        /* ── NOISE TEXTURE ── */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        /* ── NAV ── */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 4rem;
          background: rgba(10,10,15,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }

        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
          color: var(--accent);
          letter-spacing: -0.03em;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-links a {
          color: var(--muted);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.25s;
        }

        .nav-links a:hover { color: var(--text); }

        .nav-cta {
          background: transparent;
          border: 1px solid var(--accent);
          color: var(--accent) !important;
          padding: 0.5rem 1.2rem;
          border-radius: 4px;
          transition: background 0.25s !important;
        }

        .nav-cta:hover { background: var(--accent) !important; color: var(--bg) !important; }

        /* ── HERO ── */
        #hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 0 4rem;
          position: relative;
          overflow: hidden;
        }

        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .hero-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%);
          top: 50%;
          left: 60%;
          transform: translate(-50%,-50%);
          pointer-events: none;
        }

        .hero-glow2 {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%);
          top: 30%;
          left: 20%;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 780px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0,229,255,0.08);
          border: 1px solid rgba(0,229,255,0.2);
          border-radius: 100px;
          padding: 0.35rem 1rem;
          font-size: 0.8rem;
          color: var(--accent);
          font-family: 'DM Mono', monospace;
          margin-bottom: 2rem;
          animation: fadeInUp 0.6s ease both;
        }

        .badge-dot {
          width: 6px; height: 6px;
          background: var(--accent);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }

        .hero-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3.5rem, 8vw, 6.5rem);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.04em;
          animation: fadeInUp 0.6s 0.1s ease both;
          margin-bottom: 0.5rem;
        }

        .hero-name span {
          -webkit-text-stroke: 1.5px var(--accent);
          color: transparent;
        }

        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 600;
          color: var(--muted);
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.6s 0.2s ease both;
        }

        .hero-desc {
          font-size: 1.05rem;
          color: var(--muted);
          max-width: 560px;
          line-height: 1.8;
          margin-bottom: 2.5rem;
          animation: fadeInUp 0.6s 0.3s ease both;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          animation: fadeInUp 0.6s 0.4s ease both;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--accent);
          color: var(--bg);
          padding: 0.85rem 2rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,229,255,0.3);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: var(--text);
          padding: 0.85rem 2rem;
          border-radius: 6px;
          font-weight: 500;
          font-size: 0.95rem;
          text-decoration: none;
          border: 1px solid var(--border);
          transition: border-color 0.2s, background 0.2s;
        }

        .btn-secondary:hover {
          border-color: rgba(255,255,255,0.2);
          background: var(--surface2);
        }

        .hero-stats {
          position: absolute;
          right: 4rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          animation: fadeInRight 0.8s 0.5s ease both;
        }

        .stat-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem 2rem;
          text-align: center;
          min-width: 140px;
        }

        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--accent);
          display: block;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 0.3rem;
        }

        /* ── SECTION COMMON ── */
        section {
          padding: 6rem 4rem;
          position: relative;
        }

        .section-tag {
          font-family: 'DM Mono', monospace;
          font-size: 0.78rem;
          color: var(--accent);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
          display: block;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 3rem;
        }

        .section-title span { color: var(--accent); }

        /* ── ABOUT ── */
        #about { background: var(--surface); }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .about-text p {
          color: var(--muted);
          line-height: 1.9;
          margin-bottom: 1.2rem;
          font-size: 1.02rem;
        }

        .contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-top: 2rem;
        }

        .contact-list li {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.9rem;
          color: var(--muted);
        }

        .contact-list .icon {
          width: 34px; height: 34px;
          background: rgba(0,229,255,0.08);
          border: 1px solid rgba(0,229,255,0.15);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .contact-list a { color: var(--accent); text-decoration: none; transition: opacity 0.2s; }
        .contact-list a:hover { opacity: 0.75; text-decoration: underline; }

        .about-visual {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .about-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
          transition: border-color 0.3s, transform 0.3s;
        }

        .about-card:hover {
          border-color: rgba(0,229,255,0.2);
          transform: translateX(4px);
        }

        .about-card-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          margin-bottom: 0.4rem;
          font-size: 0.95rem;
        }

        .about-card p { font-size: 0.85rem; color: var(--muted); }

        /* ── SKILLS ── */
        #skills { background: var(--bg); }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .skill-category {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem;
          transition: border-color 0.3s, transform 0.3s;
        }

        .skill-category:hover {
          border-color: rgba(0,229,255,0.2);
          transform: translateY(-4px);
        }

        .skill-cat-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .skill-cat-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }

        .skill-cat-icon.cyan { background: rgba(0,229,255,0.1); }
        .skill-cat-icon.purple { background: rgba(124,58,237,0.1); }
        .skill-cat-icon.amber { background: rgba(245,158,11,0.1); }
        .skill-cat-icon.green { background: rgba(16,185,129,0.12); }

        .skill-cat-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          padding: 0.3rem 0.75rem;
          border-radius: 100px;
          border: 1px solid;
        }

        .skill-tag.cyan { color: var(--accent); border-color: rgba(0,229,255,0.25); background: rgba(0,229,255,0.05); }
        .skill-tag.purple { color: #a78bfa; border-color: rgba(124,58,237,0.3); background: rgba(124,58,237,0.06); }
        .skill-tag.amber { color: var(--accent3); border-color: rgba(245,158,11,0.3); background: rgba(245,158,11,0.06); }
        .skill-tag.green { color: #10b981; border-color: rgba(16,185,129,0.3); background: rgba(16,185,129,0.06); }

        /* ── EXPERIENCE ── */
        #experience { background: var(--surface); }

        .exp-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
        }

        .exp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, var(--accent), var(--accent2));
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .exp-role {
          font-family: 'Syne', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .exp-period {
          font-family: 'DM Mono', monospace;
          font-size: 0.78rem;
          color: var(--accent);
          background: rgba(0,229,255,0.08);
          border: 1px solid rgba(0,229,255,0.2);
          padding: 0.35rem 0.9rem;
          border-radius: 100px;
        }

        .exp-company {
          color: var(--accent);
          font-size: 0.95rem;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .exp-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .exp-list li {
          display: flex;
          gap: 0.8rem;
          color: var(--muted);
          font-size: 0.95rem;
          line-height: 1.7;
          align-items: flex-start;
        }

        .exp-list li::before {
          content: '→';
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 0.1rem;
          font-weight: 700;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 2rem;
        }

        .achievement-item {
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.2rem;
        }

        .achievement-item h4 {
          font-family: 'Syne', sans-serif;
          font-size: 0.9rem;
          color: var(--accent3);
          margin-bottom: 0.4rem;
        }

        .achievement-item p {
          font-size: 0.82rem;
          color: var(--muted);
          line-height: 1.6;
        }

        /* ── PROJECTS ── */
        #projects { background: var(--bg); }

        .project-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s;
        }

        .project-card:hover {
          border-color: rgba(0,229,255,0.25);
          transform: translateY(-6px);
        }

        .project-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top right, rgba(0,229,255,0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .project-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1.2rem;
        }

        .project-icon {
          width: 54px; height: 54px;
          background: rgba(0,229,255,0.08);
          border: 1px solid rgba(0,229,255,0.15);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .project-name {
          font-family: 'Syne', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 0.4rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          color: var(--accent2);
          background: rgba(124,58,237,0.08);
          border: 1px solid rgba(124,58,237,0.2);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }

        .project-desc {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .project-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
        }

        .proj-feat {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--muted);
          line-height: 1.5;
        }

        .proj-feat::before {
          content: '✦';
          color: var(--accent);
          font-size: 0.65rem;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        /* ── EDUCATION ── */
        #education { background: var(--surface); }

        .edu-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          max-width: 700px;
        }

        .edu-icon {
          width: 70px; height: 70px;
          background: linear-gradient(135deg, rgba(0,229,255,0.12), rgba(124,58,237,0.12));
          border: 1px solid rgba(0,229,255,0.2);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          flex-shrink: 0;
        }

        .edu-degree {
          font-family: 'Syne', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 0.3rem;
        }

        .edu-uni { color: var(--muted); font-size: 0.9rem; margin-bottom: 0.5rem; }
        .edu-period {
          font-family: 'DM Mono', monospace;
          font-size: 0.78rem;
          color: var(--accent);
        }

        /* ── CONTACT ── */
        #contact {
          background: var(--bg);
          text-align: center;
        }

        .contact-wrapper {
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2.5rem;
          flex-wrap: wrap;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 1.8rem;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 10px;
          text-decoration: none;
          color: var(--text);
          font-size: 0.9rem;
          font-weight: 500;
          transition: border-color 0.2s, transform 0.2s, background 0.2s;
        }

        .contact-link:hover {
          border-color: var(--accent);
          background: rgba(0,229,255,0.05);
          transform: translateY(-2px);
          color: var(--accent);
        }

        /* ── FOOTER ── */
        footer {
          background: var(--surface);
          border-top: 1px solid var(--border);
          padding: 2rem 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.82rem;
          color: var(--muted);
        }

        footer span { font-family: 'DM Mono', monospace; }

        /* ── ANIMATIONS ── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── SCROLLBAR ── */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: rgba(0,229,255,0.3); border-radius: 10px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          nav { padding: 1rem 1.5rem; }
          .nav-links { display: none; }
          #hero { padding: 7rem 1.5rem 4rem; flex-direction: column; }
          .hero-stats { position: static; transform: none; flex-direction: row; margin-top: 3rem; justify-content: center; }
          section { padding: 4rem 1.5rem; }
          .about-grid { grid-template-columns: 1fr; gap: 2rem; }
          .achievements-grid { grid-template-columns: 1fr; }
          .project-features { grid-template-columns: 1fr; }
          footer { flex-direction: column; gap: 0.5rem; text-align: center; padding: 1.5rem; }
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"/>
      
      {/* NAV */}
      <nav>
        <a href="#hero" className="nav-logo">SAMITH S R</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact" className="nav-cta">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-glow"></div>
        <div className="hero-glow2"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for opportunities
          </div>
          <h1 className="hero-name">SAMITH<br/><span>S R</span></h1>
          <p className="hero-title">MERN Stack Developer &nbsp;·&nbsp; React.js Specialist</p>
          <p className="hero-desc">
            Results-driven full-stack developer with 2+ years building scalable IoT-driven web applications. Passionate about real-time systems, clean architecture, and seamless user experiences.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="5 12 12 5 19 12"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
              View Projects
            </a>
            <a href="mailto:samithrgowda@gmail.com" className="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-num">2+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">90%</span>
            <span className="stat-label">Perf. Gain</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">3</span>
            <span className="stat-label">Industries</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-grid">
          <div className="about-text reveal">
            <span className="section-tag">// about me</span>
            <h2 className="section-title">Building the<br/><span>future</span> of IoT</h2>
            <p>
              I'm a MERN Stack Developer based in Bangalore, India, specializing in building high-performance industrial IoT monitoring platforms that operate at scale. My work sits at the intersection of real-time data systems, intuitive UI, and cloud infrastructure.
            </p>
            <p>
              At Sarayu Infotech, I've led full-cycle development of platforms used across wind turbines, hydroelectric dams, and remote power stations — delivering live sensor data to field engineers and management teams globally.
            </p>
            <ul className="contact-list">
              <li><span className="icon">📧</span> <a href="mailto:samithrgowda@gmail.com">samithrgowda@gmail.com</a></li>
              <li><span className="icon">📱</span> <a href="tel:+919380780049">+91 9380780049</a></li>
              <li><span className="icon">📍</span> Bangalore, India</li>
              <li><span className="icon">🔗</span> <a href="https://linkedin.com/in/samith-s-r-b41bb926a" target="_blank" rel="noreferrer">linkedin.com/in/samith-s-r</a></li>
              <li><span className="icon">🐙</span> <a href="https://github.com/samithsr" target="_blank" rel="noreferrer">github.com/samithsr</a></li>
            </ul>
          </div>

          <div className="about-visual reveal">
            <div className="about-card">
              <div className="about-card-title">🏭 &nbsp;Industrial IoT Focus</div>
              <p>Specialized in real-time monitoring systems for critical infrastructure — vibration, voltage, and temperature analytics.</p>
            </div>
            <div className="about-card">
              <div className="about-card-title">⚡ &nbsp;Real-Time Systems</div>
              <p>Expert in MQTT protocol and Socket.IO for live data streaming from remote IoT devices with sub-second latency.</p>
            </div>
            <div className="about-card">
              <div className="about-card-title">☁️ &nbsp;Cloud & DevOps</div>
              <p>Deployments on AWS with Docker containerization, ensuring secure remote access for teams globally.</p>
            </div>
            <div className="about-card">
              <div className="about-card-title">🔐 &nbsp;Security & Scale</div>
              <p>JWT auth, role-based access control, and multi-organization support for enterprise-grade industrial setups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
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

      {/* EXPERIENCE */}
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

      {/* PROJECTS */}
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

      {/* EDUCATION */}
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

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-wrapper reveal">
          <span className="section-tag">// get in touch</span>
          <h2 className="section-title">Let's Work <span>Together</span></h2>
          <p style={{color: 'var(--muted)', fontSize: '1.02rem', lineHeight: '1.8', marginTop: '-1rem'}}>
            I'm currently open to new opportunities — whether it's a full-time role, freelance project, or just a conversation about tech. My inbox is always open.
          </p>
          <div className="contact-links">
            <a href="mailto:samithrgowda@gmail.com" className="contact-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
              samithrgowda@gmail.com
            </a>
            <a href="tel:+919380780049" className="contact-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13 1 .4 1.97.71 2.93a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l.98-.96a2 2 0 0 1 2.11-.45c.96.31 1.93.58 2.93.71A2 2 0 0 1 22 16.92z"/></svg>
              +91 9380780049
            </a>
            <a href="https://linkedin.com/in/samith-s-r-b41bb926a" target="_blank" rel="noreferrer" className="contact-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn Profile
            </a>
            <a href="https://github.com/samithsr" target="_blank" rel="noreferrer" className="contact-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span>© 2025 Samith S R</span>
        <span>MERN Stack Developer · Bangalore, India</span>
      </footer>
    </>
  )
}

export default App
