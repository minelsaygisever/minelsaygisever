// src/components/Expertise.jsx
import React from 'react';
import { expertise } from '../data/portfolio';

const Expertise = () => {
  return (
    <section id="expertise">
      <div className="section-header">
        <div className="section-label">What I Do</div>
        <h2 className="section-title"><strong>Technical Expertise</strong></h2>
        <p className="section-description">
           Architecting the backend, securing the cloud, and crafting the frontend.
        </p>
      </div>

      <div className="expertise-grid">
        {expertise.map((item) => (
          <div key={item.id} className="expertise-card">
            <div className="expertise-icon">{item.icon}</div>
            <h3 className="expertise-title">{item.title}</h3>
            <p className="expertise-desc">{item.description}</p>
            
            <div className="expertise-tech-stack">
              {item.tech.map((t, index) => (
                <span key={index} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;