import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection({ onShowToast }) {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) {
      onShowToast(`Copied ${fieldName} to clipboard!`);
    }
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-card">
          <div className="section-tag" style={{ margin: '0 auto 16px' }}>
            <MessageSquare size={13} />
            <span>Get in Touch</span>
          </div>

          <h2 className="contact-heading">
            Let's Build Something Useful
          </h2>

          <p className="contact-subtext">
            I'm open to software engineering opportunities, internships, and projects where I can solve real problems and build reliable software.
          </p>

          <div className="contact-channels-grid">
            {/* Email Card */}
            <div className="contact-channel-btn" onClick={() => copyToClipboard(PERSONAL_INFO.email, 'Email')}>
              <div className="channel-icon">
                <Mail size={20} />
              </div>
              <div className="channel-label">Email Address</div>
              <div className="channel-val">{PERSONAL_INFO.email}</div>
              <div className="channel-copy-hint">
                {copiedField === 'Email' ? (
                  <span style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Check size={12} /> Copied!
                  </span>
                ) : (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Copy size={11} /> Click to Copy
                  </span>
                )}
              </div>
            </div>

            {/* Phone Card */}
            <div className="contact-channel-btn" onClick={() => copyToClipboard(PERSONAL_INFO.rawPhone, 'Phone')}>
              <div className="channel-icon">
                <Phone size={20} />
              </div>
              <div className="channel-label">Direct Phone</div>
              <div className="channel-val">{PERSONAL_INFO.phone}</div>
              <div className="channel-copy-hint">
                {copiedField === 'Phone' ? (
                  <span style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Check size={12} /> Copied!
                  </span>
                ) : (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Copy size={11} /> Click to Copy
                  </span>
                )}
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-btn"
            >
              <div className="channel-icon">
                <Linkedin size={18} />
              </div>
              <div className="channel-label">Professional Profile</div>
              <div className="channel-val">pawan-raghuwanshi</div>
              <div className="channel-copy-hint" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>Connect</span>
                <ExternalLink size={11} />
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-btn"
            >
              <div className="channel-icon">
                <Github size={20} />
              </div>
              <div className="channel-label">Code Repositories</div>
              <div className="channel-val">pawan08bhd</div>
              <div className="channel-copy-hint" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>View Profile</span>
                <ExternalLink size={11} />
              </div>
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="btn btn-primary"
            >
              <Mail size={16} />
              <span>Send Direct Email</span>
            </a>

            <a
              href={PERSONAL_INFO.links.resume}
              download="Pawan_Raghuwanshi_Resume.pdf"
              className="btn btn-secondary"
            >
              <span>Download Official Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
