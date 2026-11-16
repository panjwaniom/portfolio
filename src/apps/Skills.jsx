import React from 'react';

const skills = {
  'Languages': ['JavaScript', 'TypeScript', 'Python', 'SQL'],
  'Frontend': ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux Toolkit', 'Context API', 'Responsive Web Design'],
  'Backend': ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'FastAPI'],
  'Databases': ['MySQL', 'PostgreSQL', 'SQLite', 'Redis'],
  'Tools & DevOps': ['Git', 'GitHub', 'Docker', 'Postman', 'Vite', 'npm', 'Linux', 'Visual Studio Code'],
  'Core Concepts': ['API Integration', 'CRUD Operations', 'Role-Based Access Control (RBAC)', 'Database Design', 'Async Processing', 'Error Handling', 'Agile']
};

const Skills = () => {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
      
      <div className="skills-list">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-category">
            <h3 className="skills-category-title">{category}</h3>
            <div className="skills-tags-container">
              {items.map((skill, i) => (
                <div key={i} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
