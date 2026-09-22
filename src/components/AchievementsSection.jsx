import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-tag">
          <Award size={13} />
          <span>Honors & Certifications</span>
        </div>

        <h2 className="section-title">
          Achievements & Continuous Learning
        </h2>

        <p className="section-subtitle">
          National engineering competitions, academic certifications, and industry professional development programs.
        </p>

        <div className="achievements-grid">
          {ACHIEVEMENTS_DATA.map((item, idx) => (
            <div key={idx} className="achievement-card">
              <span className="achieve-badge">{item.category}</span>
              <h3 className="achieve-title">{item.title}</h3>
              <div className="achieve-issuer">{item.issuer}</div>
              <p className="achieve-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
