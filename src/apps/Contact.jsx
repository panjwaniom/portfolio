import React from 'react';
import { Mail, Briefcase, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="contact-section-layout">
      <h2 className="contact-heading">Let's Connect</h2>
      <p className="contact-subheading">
        Feel free to reach out for collaborations or just to say hi.
      </p>
      
      <div className="contact-cards-container">
        <motion.a 
          whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)" }}
          whileTap={{ scale: 0.98 }}
          href="mailto:ompanjwani77@gmail.com" 
          className="contact-card"
        >
          <div className="contact-card-icon" style={{ background: 'rgba(255, 255, 255, 0.1)', color: 'white', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            <Mail size={24} />
          </div>
          <div className="contact-card-text">
            <h3 className="contact-card-title">Email</h3>
            <p className="contact-card-desc">ompanjwani77@gmail.com</p>
          </div>
        </motion.a>

        <motion.a 
          whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)" }}
          whileTap={{ scale: 0.98 }}
          href="https://www.linkedin.com/in/ompanjwani/" 
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-card-icon" style={{ background: 'rgba(255, 255, 255, 0.1)', color: 'white', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            <Briefcase size={24} />
          </div>
          <div className="contact-card-text">
            <h3 className="contact-card-title">LinkedIn</h3>
            <p className="contact-card-desc">linkedin.com/in/ompanjwani</p>
          </div>
        </motion.a>

        <motion.a 
          whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)" }}
          whileTap={{ scale: 0.98 }}
          href="https://github.com/panjwaniom" 
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-card-icon" style={{ background: 'rgba(255, 255, 255, 0.1)', color: 'white', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            <Code2 size={24} />
          </div>
          <div className="contact-card-text">
            <h3 className="contact-card-title">GitHub</h3>
            <p className="contact-card-desc">github.com/panjwaniom</p>
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
