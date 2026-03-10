import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-tag">MERN Stack Developer</p>
          <h1 className="hero-name">Hi, I'm <span className="accent">Samith</span></h1>
          <p className="hero-sub">
            I build <span>real-time IoT platforms</span>, responsive web applications, and scalable full-stack systems using <span>React.js, Node.js, MongoDB</span> and modern cloud infrastructure.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-solid">View My Work</a>
            <a href="mailto:samithrgowda@gmail.com" className="btn-outline">Get In Touch</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-glow-circle"></div>
          <div className="hero-monitor">
            <div className="monitor-screen">
              <div className="monitor-code">
                <span className="c-blue">import</span> <span className="c-purple">React</span> <span className="c-blue">from</span> <span className="c-orange">'react'</span>;<br/>
                <span className="c-blue">import</span> <span className="c-purple">mqtt</span> <span className="c-blue">from</span> <span className="c-orange">'mqtt'</span>;<br/><br/>
                <span className="c-green">const</span> <span className="c-blue">client</span> = <span className="c-blue">mqtt</span>.<span className="c-blue">connect</span>(<span className="c-orange">'ws://broker'</span>);<br/>
                <span className="c-purple">client</span>.<span className="c-blue">on</span>(<span className="c-orange">'message'</span>, <span className="c-purple">console</span>.<span className="c-blue">log</span>);<br/>
                <span className="c-red">return</span> <span className="c-blue">&lt;Dashboard</span> <span className="c-blue">/&gt;</span>;
              </div>
            </div>
            <div className="monitor-stand"></div>
            <div className="monitor-base"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
