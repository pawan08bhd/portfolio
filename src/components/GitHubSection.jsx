import React from 'react';
import {
  ExternalLink,
  FolderGit2,
  Star,
  GitFork,
  Code
} from 'lucide-react';
import { Github } from './Icons';
import { GITHUB_REPOS, PERSONAL_INFO } from '../data/portfolioData';

export default function GitHubSection() {
  return (
    <section id="github" className="section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
          <div>
            <div className="section-tag">
              <FolderGit2 size={13} />
              <span>Open Source & Code</span>
            </div>

            <h2 className="section-title" style={{ marginBottom: '8px' }}>
              Explore the Code
            </h2>

            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              Direct access to clean, service-oriented repositories, backend APIs, and frontend implementations.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Github size={16} />
            <span>github.com/pawan08bhd</span>
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="github-grid">
          {GITHUB_REPOS.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-card"
            >
              <div className="repo-card-top">
                <FolderGit2 size={20} className="repo-card-icon" />
                <ExternalLink size={16} className="repo-card-link-icon" />
              </div>

              <h3 className="repo-card-name">{repo.name}</h3>
              <p className="repo-card-desc">{repo.description}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {repo.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tech-pill" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="repo-card-footer">
                <div className="repo-lang">
                  <span className="repo-lang-dot"></span>
                  <span>{repo.language}</span>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={12} />
                    <span>{repo.stars}</span>
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <GitFork size={12} />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
