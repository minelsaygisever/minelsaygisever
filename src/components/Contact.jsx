import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        <div className="section-header">
          <div className="section-label">Contact</div>
          <h2 className="section-title"><strong>Let's Work Together</strong></h2>
          <p className="section-description">
             I am always open to discussing new projects, creative ideas <br />
             or opportunities to be part of your visions.
          </p>
        </div>

        <div className="contact-grid">
          
          <a href="mailto:minelsaygisever@gmail.com" className="contact-box">
            <div className="icon-wrapper">
              <FiMail />
            </div>
            <h3 className="box-title">Email</h3>
            <p className="box-desc">minelsaygisever@gmail.com</p>
            <span className="box-link">Send a message <FiArrowUpRight /></span>
          </a>

          <a href="https://linkedin.com/in/minelsaygisever" target="_blank" rel="noopener noreferrer" className="contact-box">
            <div className="icon-wrapper">
              <FiLinkedin />
            </div>
            <h3 className="box-title">LinkedIn</h3>
            <p className="box-desc">Professional Profile</p>
            <span className="box-link">Connect now <FiArrowUpRight /></span>
          </a>

          <a href="https://github.com/minelsaygisever" target="_blank" rel="noopener noreferrer" className="contact-box">
            <div className="icon-wrapper">
              <FiGithub />
            </div>
            <h3 className="box-title">GitHub</h3>
            <p className="box-desc">Code & Contributions</p>
            <span className="box-link">View profile <FiArrowUpRight /></span>
          </a>

        </div>

        {/* Footer */}
        <div className="contact-footer-simple">
          <div className="copyright">
            © {new Date().getFullYear()} Minel SAYGISEVER.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;