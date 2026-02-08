// src/components/Experience.jsx
import React from 'react';
import { experiences } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="section-header">
        <div className="section-label">Career Path</div>
        <h2 className="section-title"><strong>Professional Experience</strong></h2>
      </div>

      <div className="timeline-container">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-marker"></div>
            
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-role">{exp.role}</h3>
                <span className="timeline-period">{exp.period}</span>
              </div>
              
              <div className="timeline-company">{exp.company}</div>
              
              <ul className="timeline-list">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;