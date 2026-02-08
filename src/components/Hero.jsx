// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/minel.png" alt="Minel Saygisever" />
        </div>
        
        <div className="hero-text">
          <div className="hero-label">Software Engineer</div>
            <h1 className="hero-title">
                Engineering <strong>Scalable</strong> Systems and <br />
                <strong>Resilient</strong> Architectures
            </h1>
          
          <div className="hero-cta">
            <a href="#apps" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
      </div>

      {/* Aşağı kaydırma animasyonu */}
      <div className="scroll-indicator">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;