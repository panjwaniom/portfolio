import React from 'react';

const AboutMe = () => {
  return (
    <div className="text-white">
      <div className="about-header">
        <div className="about-avatar">
          <img src="/profile.jpg" alt="Om Panjwani" className="about-avatar-img" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Om Panjwani</h1>
          <p className="about-subtitle">Full Stack Developer · React · TypeScript · Node.js</p>
        </div>
      </div>
      
      <div className="about-text">
        <p>
          I'm a Full Stack Developer with 2+ years of professional experience at Helson Software Solutions, Hyderabad. I build responsive frontend applications with React and TypeScript and develop backend services using Node.js, Express, REST APIs, and relational databases. My work spans authentication, API integrations, background processing, and application performance. I've also built independent projects ranging from data synchronization platforms to face-recognition photo search. I'm currently open to full-stack developer opportunities where I can contribute across the stack.
        </p>
        
        <div>
          <h2 className="about-section-title">Education</h2>
          <div className="about-card">
            <h3 className="font-medium">Bachelor of Computer Applications</h3>
            <p className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Maharaja Agrasen Himalayan Garhwal University • 2021 - 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
