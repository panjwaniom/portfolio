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
          <p className="about-subtitle">Frontend Developer · React · TypeScript · JavaScript</p>
        </div>
      </div>
      
      <div className="about-text">
        <p>
          I build fast, clean web apps with React and TypeScript. I care about performance, readable code, and UIs that work on every screen — from improving load performance to building a macOS-style desktop interface entirely in React.
        </p>
        
        <div>
          <h2 className="about-section-title">Education</h2>
          <div className="about-card">
            <h3 className="font-medium">Bachelor of Computer Applications</h3>
            <p className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Maharaja Agrasen Himalayan Garhwal University • 2021 – 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
