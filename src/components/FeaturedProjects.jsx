import React from 'react';
import { Layers, Sparkles } from 'lucide-react';
import RasayanFlowCaseStudy from './RasayanFlowCaseStudy';
import PromptDocsCard from './PromptDocsCard';
import BlogifyCard from './BlogifyCard';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function FeaturedProjects({ onOpenCertificate }) {
  const flagship = PROJECTS_DATA.find((p) => p.isFlagship);
  const secondaryProjects = PROJECTS_DATA.filter((p) => !p.isFlagship);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-tag">
          <Layers size={13} />
          <span>Featured Engineering Work</span>
        </div>

        <h2 className="section-title">
          Projects & System Case Studies
        </h2>

        <p className="section-subtitle">
          Real-world software architectures, verified production deployments, and end-to-end full-stack engineering implementations.
        </p>

        {/* Flagship Case Study — RasayanFlow */}
        {flagship && (
          <RasayanFlowCaseStudy
            project={flagship}
            onOpenCertificate={onOpenCertificate}
          />
        )}

        {/* Secondary Case Studies — PromptDocs & Blogify */}
        <div className="secondary-projects-grid">
          {secondaryProjects.map((proj) => {
            if (proj.id === 'promptdocs') {
              return <PromptDocsCard key={proj.id} project={proj} />;
            }
            if (proj.id === 'blogify') {
              return <BlogifyCard key={proj.id} project={proj} />;
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
