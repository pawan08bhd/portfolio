import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenCertificate }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'projects', 'skills', 'problem-solving', 'experience', 'achievements', 'github', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'problem-solving', label: 'Problem Solving' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'github', label: 'GitHub' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="navbar-wrapper" style={{
      boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
      borderBottomColor: scrolled ? 'rgba(255, 255, 255, 0.12)' : 'var(--border-subtle)'
    }}>
      <div className="container navbar-inner">
        <a href="#hero" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
          <img src="/RasayanFlow_logo.png" alt="Pawan Raghuwanshi Emblem" className="nav-brand-emblem" />
          <span className="nav-brand-text">
            Pawan<span>.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {mobileMenuOpen && (
              <li style={{ marginTop: '12px' }}>
                <a
                  href={PERSONAL_INFO.links.resume}
                  download="Pawan_Raghuwanshi_Resume.pdf"
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%' }}
                >
                  <FileText size={15} />
                  Download Resume
                </a>
              </li>
            )}
          </ul>
        </nav>

        {/* Desktop Resume CTA */}
        <div className="nav-actions">
          <a
            href={PERSONAL_INFO.links.resume}
            download="Pawan_Raghuwanshi_Resume.pdf"
            className="btn btn-primary btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={15} />
            <span>Resume</span>
          </a>

          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
