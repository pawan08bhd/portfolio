import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  Users,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function ExperienceSection({ onOpenCertificate }) {
  const exp = EXPERIENCE_DATA[0];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-tag">
          <Briefcase size={13} />
          <span>Practical Engineering Experience</span>
        </div>

        <h2 className="section-title">
          Experience & Real-World Impact
        </h2>

        <p className="section-subtitle">
          Hands-on software leadership building and deploying production systems in departmental environments.
        </p>

        <div className="experience-card">
          <div className="exp-header">
            <div>
              <h3 className="exp-role-title">{exp.role}</h3>
              <div className="exp-org-line">{exp.organization}</div>
              <div className="exp-meta-line">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </span>
                <span className="hero-status-tag" style={{ padding: '2px 8px', fontSize: '0.75rem' }}>
                  {exp.type}
                </span>
              </div>
            </div>

            <button
              onClick={onOpenCertificate}
              className="btn btn-outline-accent btn-sm"
              type="button"
            >
              <Award size={14} />
              <span>Verify Official Certificate</span>
            </button>
          </div>

          <ul className="exp-bullets-list">
            {exp.bullets.map((bullet, idx) => (
              <li key={idx} className="exp-bullet-item">
                <span className="exp-bullet-bullet"></span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Verification Banner */}
          <div className="exp-verification-banner">
            <div className="exp-verify-info">
              <FileCheck size={24} color="var(--accent-primary)" />
              <div>
                <div className="exp-verify-title">Official Departmental Internship Certificate</div>
                <div className="exp-verify-sub">Verified & signed by {exp.supervisor}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={onOpenCertificate}
                className="btn btn-primary btn-sm"
                type="button"
              >
                <span>View Certificate</span>
                <ExternalLink size={13} />
              </button>

              <a
                href={exp.verifiedCertificate}
                download="Certificate_RasayanFlow.pdf"
                className="btn btn-secondary btn-sm"
              >
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
