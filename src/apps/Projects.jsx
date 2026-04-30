import React from 'react';
import { Code2 } from 'lucide-react';

const projects = [
  {
    title: 'TaskToDo (Web App)',
    desc: 'A full-stack task management web app with secure JWT-based authentication, built using React, Node.js, Express, and MySQL.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'GitHub'],
    repoLink: 'https://github.com/panjwaniom/task-todo-web-app'
  },
  {
    title: 'Weather & News Dashboard',
    desc: 'A real-time dashboard built with React and TypeScript that displays weather forecasts and categorized news, featuring smart caching, API optimization, and a smooth experience on slow connections.',
    tech: ['React.js', 'TypeScript', 'REST APIs'],
    repoLink: '#'
  }
];

const Projects = () => {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-header">
              <h3 className="font-semibold" style={{ fontSize: '18px' }}>{p.title}</h3>
              <div className="project-links">
                <a 
                  href={p.repoLink} 
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 size={16} />
                </a>
              </div>
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tech">
              {p.tech.map((t, j) => (
                <span key={j} className="project-tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
