import React, { useState } from 'react';
import {
  ExternalLink,
  Award,
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Users,
  Database,
  Server,
  Code,
  Radio,
  FileCheck
} from 'lucide-react';
import { Github } from './Icons';

export default function RasayanFlowCaseStudy({ project, onOpenCertificate }) {
  const [activeTab, setActiveTab] = useState('architecture');

  const tabs = [
    { id: 'architecture', label: 'Technical Architecture' },
    { id: 'roles', label: 'User Roles & Access Control' },
    { id: 'features', label: 'Core Features' },
    { id: 'impact', label: 'Real-World Outcome & Verification' },
  ];

  return (
    <article className="flagship-card" id="rasayanflow">
      {/* Flagship Header */}
      <div className="flagship-header">
        <div className="flagship-title-area">
          <div className="flagship-logo-box">
            <img src={project.logoImage} alt="RasayanFlow Emblem" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <h3 className="flagship-title">{project.title}</h3>
              <span className="flagship-badge">Flagship Case Study</span>
            </div>
            <p className="flagship-subtitle">{project.subtitle}</p>
          </div>
        </div>

        <div className="flagship-actions">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <span>Live Demo</span>
            <ExternalLink size={13} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <Github size={13} />
            <span>GitHub</span>
          </a>

          <button
            onClick={onOpenCertificate}
            className="btn btn-outline-accent btn-sm"
            type="button"
          >
            <Award size={13} />
            <span>Verified Certificate</span>
          </button>
        </div>
      </div>

      {/* Case Study Tab Navigation */}
      <div className="case-study-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`case-study-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {activeTab === tab.id && <span className="tab-indicator-dot"></span>}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="flagship-body">
        {/* Infographic Preview Visual */}
        <div className="flagship-preview-visual">
          <img
            src={project.screenshotImage}
            alt="RasayanFlow Real-Time Laboratory Chemical Inventory and Requisition Interface"
            loading="lazy"
          />
        </div>

        {/* Operational Metrics Grid */}
        <div className="flagship-stats-grid">
          {project.stats.map((st, idx) => (
            <div key={idx} className="flagship-stat-card">
              <div className="val">{st.value}</div>
              <div className="lbl">{st.label}</div>
            </div>
          ))}
        </div>

        {/* Dynamic Tab Content */}
        {activeTab === 'architecture' && (
          <div>
            <div className="architecture-diagram-container">
              <div className="arch-header">
                <div className="arch-title">
                  <Layers size={16} color="var(--accent-primary)" />
                  <span>Full-Stack Architecture & Data Flow</span>
                </div>
              </div>

              {/* Architecture Node Grid */}
              <div className="arch-flow-grid">
                {/* Node 1: Frontend */}
                <div className="arch-node">
                  <div className="arch-node-tag">Client Application</div>
                  <div className="arch-node-name">React + Vite SPA</div>
                  <p className="arch-node-desc">
                    High-performance client with code splitting and lazy loading. Responsive role-specific dashboards built with Tailwind CSS.
                  </p>
                  <div className="arch-node-pills">
                    <span className="tech-pill">React 18</span>
                    <span className="tech-pill">Vite</span>
                    <span className="tech-pill">Tailwind CSS</span>
                    <span className="tech-pill">Zustand</span>
                  </div>
                </div>

                {/* Node 2: Backend */}
                <div className="arch-node">
                  <div className="arch-node-tag">Backend & Systems</div>
                  <div className="arch-node-name">Node.js + Express.js</div>
                  <p className="arch-node-desc">
                    Modular RESTful API services with centralized error middleware, rate limiting, and bi-directional WebSocket event sync.
                  </p>
                  <div className="arch-node-pills">
                    <span className="tech-pill">Express REST APIs</span>
                    <span className="tech-pill">Socket.IO</span>
                    <span className="tech-pill">JWT Middleware</span>
                    <span className="tech-pill">Helmet & CORS</span>
                  </div>
                </div>

                {/* Node 3: Database & Integrations */}
                <div className="arch-node">
                  <div className="arch-node-tag">Persistence & APIs</div>
                  <div className="arch-node-name">MongoDB & External APIs</div>
                  <p className="arch-node-desc">
                    9 indexed MongoDB collections for fast querying. Automated PubChem CAS data autofill and PubMed literature search.
                  </p>
                  <div className="arch-node-pills">
                    <span className="tech-pill">MongoDB Atlas</span>
                    <span className="tech-pill">Mongoose ODM</span>
                    <span className="tech-pill">PubChem API</span>
                    <span className="tech-pill">PubMed API</span>
                  </div>
                </div>

                {/* Supporting Infrastructure Sub-layer */}
                <div className="arch-sub-layer">
                  <div>
                    <div className="arch-sub-title">Supporting Real-Time & Security Infrastructure:</div>
                    <div className="arch-sub-desc">
                      JWT Authentication with Role-Based Access Control (RBAC) across 4 user roles + Socket.IO push bus for real-time inventory and approval notifications without browser polling.
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    <span className="tech-pill" style={{ color: '#ffffff' }}>
                      <Radio size={12} color="var(--accent-primary)" />
                      Socket.IO Push Bus
                    </span>
                    <span className="tech-pill" style={{ color: '#ffffff' }}>
                      <ShieldCheck size={12} color="var(--accent-secondary)" />
                      RBAC Security
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem & Solution Narrative */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
              <div className="about-card" style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '8px', fontWeight: 600 }}>
                  The Problem
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#a3a3a3', lineHeight: '1.6' }}>
                  {project.problem}
                </p>
              </div>

              <div className="about-card" style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-primary)', marginBottom: '8px', fontWeight: 600 }}>
                  The Engineering Solution
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#a3a3a3', lineHeight: '1.6' }}>
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'roles' && (
          <div>
            <p style={{ color: '#888888', marginBottom: '16px', fontSize: '0.875rem' }}>
              RasayanFlow enforces a strict 4-level Role-Based Access Control (RBAC) security model implemented via JWT claims and Express authorization middleware:
            </p>
            <div className="roles-grid">
              {project.userRoles.map((r, i) => (
                <div key={i} className="role-card">
                  <div className="role-header">
                    <span className="role-name">{r.role}</span>
                    <span className="role-badge">{r.badge}</span>
                  </div>
                  <p className="role-desc">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div>
            <div className="features-checklist-grid">
              {project.features.map((f, i) => (
                <div key={i} className="feature-check-item">
                  <CheckCircle2 size={15} className="feature-check-icon" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'impact' && (
          <div>
            <div className="about-card" style={{ padding: '24px' }}>
              <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 600, marginBottom: '6px' }}>
                Official Departmental Adoption & Internship Verification
              </h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Department of Pharmaceutical Studies • Shri G. S. Institute of Technology & Science (SGSITS)
              </p>

              <p style={{ color: '#a3a3a3', lineHeight: '1.7', marginBottom: '20px', fontSize: '0.9rem' }}>
                {project.outcome}
              </p>

              <div className="exp-verification-banner">
                <div className="exp-verify-info">
                  <FileCheck size={20} color="var(--accent-primary)" />
                  <div>
                    <div className="exp-verify-title">Certificate of Internship Issued by Dr. Omprakash Tanwar</div>
                    <div className="exp-verify-sub">Former SERB-SIRe Fellow (University of Oxford) • Assistant Professor, Dept. of Pharmacy, SGSITS</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={onOpenCertificate}
                    className="btn btn-primary btn-sm"
                    type="button"
                  >
                    <Award size={13} />
                    <span>View Certificate</span>
                  </button>

                  <a
                    href="/Certificate_RasayanFlow.pdf"
                    download="Certificate_RasayanFlow.pdf"
                    className="btn btn-secondary btn-sm"
                  >
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tech Stack Footer */}
        <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>STACK:</span>
            {project.techStack.map((tech, i) => (
              <span key={i} className="tech-pill">{tech}</span>
            ))}
          </div>

          <div>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <span>Launch RasayanFlow</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
