import React from 'react';
import {
  Code2,
  Server,
  Database,
  Layout,
  Cpu,
  Wrench,
  Terminal,
  ShieldAlert
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export default function SkillsSection() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Languages':
        return <Code2 size={20} />;
      case 'Backend & Systems':
        return <Server size={20} />;
      case 'Databases & Persistence':
        return <Database size={20} />;
      case 'Frontend Development':
        return <Layout size={20} />;
      case 'Core CS Fundamentals':
        return <Cpu size={20} />;
      case 'Developer Tools & Platforms':
        return <Wrench size={20} />;
      default:
        return <Terminal size={20} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-tag">
          <Wrench size={13} />
          <span>Technical Competencies</span>
        </div>

        <h2 className="section-title">
          Skills & Technologies
        </h2>

        <p className="section-subtitle">
          Engineered across languages, backend architectures, databases, and foundational computer science principles.
        </p>

        <div className="skills-grid">
          {SKILLS_DATA.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="skill-category-title">{cat.category}</h3>
              </div>

              <p className="skill-category-desc">{cat.description}</p>

              <div className="skill-items-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
