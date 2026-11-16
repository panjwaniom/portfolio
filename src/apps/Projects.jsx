import React from 'react';
import { Code2 } from 'lucide-react';

const projects = [
  {
    title: 'RelayOps',
    desc: 'An API integration and data synchronization platform with 5+ API workflows and batch processing of 1,000+ records. Includes BullMQ and Redis background jobs, Gemini-assisted failure analysis, and a workflow that reduced debugging by 35%.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'BullMQ', 'Docker'],
    repoLink: 'https://github.com/panjwaniom/relayops'
  },
  {
    title: 'Wedding Photo Discovery',
    desc: 'A self-hosted wedding photo search platform built on Immich face recognition. Guests can find their own photos without manually scrolling through thousands of images. Tested with 500+ images.',
    tech: ['React', 'Python', 'FastAPI', 'Immich', 'Docker'],
    repoLink: 'https://github.com/panjwaniom/wedding-photo-discovery'
  },
  {
    title: 'Task Manager',
    desc: 'A full-stack task management application with 6+ features and 10+ API endpoints. Built with JWT authentication, a React and TypeScript frontend, and a Node.js backend connected to MySQL.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'JWT'],
    repoLink: 'https://github.com/panjwaniom/task-todo-web-app'
  },
  {
    title: 'Weather & News Dashboard',
    desc: 'A React and TypeScript dashboard that brings weather and news information together using REST APIs and caching for data retrieval.',
    tech: ['React', 'TypeScript', 'REST APIs', 'Caching'],
    repoLink: 'https://github.com/panjwaniom/weather-news-dashboard'
  },
  {
    title: 'macOS Portfolio',
    desc: 'An interactive macOS-inspired portfolio built with React and Framer Motion. Achieved a Lighthouse score of 100 and a First Contentful Paint of 0.6 seconds.',
    tech: ['React', 'Framer Motion', 'JavaScript', 'Performance Optimization'],
    repoLink: 'https://github.com/panjwaniom/portfolio'
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
