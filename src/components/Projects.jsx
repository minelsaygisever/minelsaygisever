// src/components/Projects.jsx
import React, { useState } from 'react';
import { githubProjects, mobileApps } from '../data/portfolio';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('backend');

  const isFourProjects = githubProjects.length === 4;

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', width: '100%' }}>
      
      <div className="projects-container">
      
        <div className="section-header">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title"><strong>Featured Work</strong></h2>
        </div>

        <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveTab('backend')}
          >
            Backend & Architecture
          </button>
          <button 
            className={`tab-btn ${activeTab === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveTab('mobile')}
          >
            Mobile Apps
          </button>
        </div>

        
        {activeTab === 'backend' && (
          <div className={`projects-grid ${isFourProjects ? 'grid-2-cols' : ''}`}>
            {githubProjects.map((project) => (
              <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card backend-card">
                <div className="card-top">
                  <div className="folder-icon">{project.icon}</div>
                  <div className="arrow-icon">↗</div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        )}

        {activeTab === 'mobile' && (
          <div className="mobile-stack">
            {mobileApps.map((app) => (
              <a key={app.id} href={app.link} target="_blank" rel="noopener noreferrer" className="mobile-app-card">
                <div className="mobile-app-icon-box">
                    <img 
                      src={app.icon} 
                      alt={app.title} 
                      className="mobile-app-img"
                      onError={(e) => {e.target.style.display='none'}} 
                    />
                </div>
                <div className="mobile-app-content">
                    <div className="mobile-app-header">
                        <h3 className="mobile-app-title">{app.title}</h3>
                        <span className="app-category">{app.category}</span>
                    </div>
                    <p className="mobile-app-desc">{app.description}</p>
                    <div className="mobile-app-footer">
                        <div className="project-tags">
                            {app.tech.map((t, i) => (
                                <span key={i} className="project-tag">{t}</span>
                            ))}
                        </div>
                        <div className="app-store-btn">View on App Store ↗</div>
                    </div>
                </div>
              </a>
            ))}
          </div>
        )}

      </div> 
    </section>
  );
};

export default Projects;