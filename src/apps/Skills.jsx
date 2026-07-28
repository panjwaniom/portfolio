import React from 'react';

const skills = {
  'Languages': ['JavaScript (ES6+)', 'TypeScript', 'Python'],
  'Frontend': ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Context API', 'REST APIs', 'Responsive Design', 'Component Architecture'],
  'Tools': ['Git', 'GitHub', 'Vite', 'Postman', 'Figma', 'Chrome DevTools'],
  'Backend': ['Node.js', 'Express.js', 'MySQL']
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
