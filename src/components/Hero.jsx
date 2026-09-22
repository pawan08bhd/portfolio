import React from 'react';
import {
  ArrowDown,
  FileText,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        {/* Status Line */}
        <div className="hero-badge-row">
          <div className="hero-status-tag">
            <span className="status-dot"></span>
            <span>Available for SDE Roles & Internships</span>
          </div>
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            SGSITS Indore • Electrical Engineering '27
          </span>
        </div>

        {/* Name & Title */}
        <h1 className="hero-title">
          {PERSONAL_INFO.name}
        </h1>

        <div className="hero-headline">
          <span>Software Engineer</span> &bull; <span>Full-Stack Developer</span>
        </div>

        <p className="hero-subtext">
          {PERSONAL_INFO.supportingText}
        </p>

        {/* Clean Tech Badges */}
        <div className="hero-tech-badges">
          <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginRight: '4px', fontFamily: 'var(--font-mono)' }}>
            STACK:
          </span>
          {PERSONAL_INFO.heroBadges.map((badge, idx) => (
            <span key={idx} className="hero-tech-badge">
              {badge}
            </span>
          ))}
        </div>

        {/* Clean CTAs */}
        <div className="hero-cta-group">
          <a href="#projects" className="btn btn-primary">
            <span>View Projects</span>
            <ArrowDown size={15} />
          </a>

          <a
            href={PERSONAL_INFO.links.resume}
            download="Pawan_Raghuwanshi_Resume.pdf"
            className="btn btn-secondary"
          >
            <FileText size={15} />
            <span>Download Resume</span>
          </a>

          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Github size={15} />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Linkedin size={15} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Clean Contact Details */}
        <div className="hero-contacts-strip">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hero-contact-item">
            <Mail size={14} color="var(--accent-primary)" />
            <span>{PERSONAL_INFO.email}</span>
          </a>

          <a href={`tel:${PERSONAL_INFO.rawPhone}`} className="hero-contact-item">
            <Phone size={14} color="var(--text-secondary)" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>

          <span className="hero-contact-item" style={{ color: 'var(--text-muted)' }}>
            <MapPin size={14} />
            <span>{PERSONAL_INFO.location}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
