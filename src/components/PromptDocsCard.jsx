import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { Github } from './Icons';

export default function PromptDocsCard({ project }) {
  return (
    <article className="project-card" id="promptdocs">
      {/* Card Screenshot Preview */}
      <div className="project-card-image">
        <img
          src={project.screenshotImage}
          alt="PromptDocs Platform Interface"
          loading="lazy"
        />
      </div>

      <div className="project-card-content">
        <div className="project-card-header">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--accent-secondary)', fontFamily: 'var(--font-mono)' }}>
              AI DOCUMENTATION & PROMPT ENGINEERING
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Vite • SPA</span>
          </div>
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-subtitle">{project.subtitle}</p>
        </div>

        <p className="project-card-desc">
          {project.shortDescription}
        </p>

        {/* Key Features */}
        <ul className="project-card-features">
          {project.features.slice(0, 4).map((feat, i) => (
            <li key={i} className="project-card-feature-item">
              <CheckCircle2 size={13} color="var(--accent-primary)" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Chips */}
        <div className="project-card-stack">
          {project.techStack.map((tech, i) => (
            <span key={i} className="tech-pill">{tech}</span>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="project-card-actions">
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
        </div>
      </div>
    </article>
  );
}
