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
          I build fast, clean web apps with React and TypeScript, with 2 years of experience shipping production interfaces. I care about performance, readable code, and UIs that work on every screen — from optimizing load performance to building a macOS-style desktop interface with custom window management and physics-based animations.
        </p>
        
        <div>
          <h2 className="about-section-title">Experience</h2>
          <div className="about-card mb-4">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div>
                <h3 className="font-semibold" style={{ fontSize: '17px' }}>Frontend Developer</h3>
                <p style={{ color: '#60a5fa', fontWeight: '500', fontSize: '14px' }}>Helson Software Solutions Pvt. Ltd.</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '12px', padding: '2px 8px', borderRadius: '4px', color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.1)' }}>Aug 2024 – Present</span>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>Hyderabad, Telangana</p>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: '1.5', marginBottom: '12px' }}>
              Building responsive, component-driven interfaces across multiple client applications, integrating REST APIs, and introducing TypeScript into production React codebases.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'REST APIs'].map((tech, i) => (
                <span key={i} style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.2)', color: '#93c5fd', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

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
