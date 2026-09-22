import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-inner">
        <div className="footer-left">
          <span>&copy; 2026 {PERSONAL_INFO.name}.</span>
          <span style={{ color: 'var(--text-dim)' }}>•</span>
          <span>Built with passion for software engineering.</span>
        </div>

        <div className="footer-right">
          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>

          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="footer-link"
            aria-label="Send Email"
          >
            <Mail size={18} />
          </a>

          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ padding: '6px 10px', marginLeft: '6px' }}
            aria-label="Scroll back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
