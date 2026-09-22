import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EngineeringProfile from './components/EngineeringProfile';
import FeaturedProjects from './components/FeaturedProjects';
import SkillsSection from './components/SkillsSection';
import ProblemSolving from './components/ProblemSolving';
import ExperienceSection from './components/ExperienceSection';
import AchievementsSection from './components/AchievementsSection';
import GitHubSection from './components/GitHubSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CertificateModal from './components/CertificateModal';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  return (
    <div className="portfolio-app-root">
      {/* Sticky Top Navigation */}
      <Navbar onOpenCertificate={() => setCertificateModalOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Engineering Profile / About */}
        <EngineeringProfile />

        {/* Featured Projects (Flagship RasayanFlow + PromptDocs + Blogify) */}
        <FeaturedProjects onOpenCertificate={() => setCertificateModalOpen(true)} />

        {/* Technical Skills */}
        <SkillsSection />

        {/* Problem Solving & DSA */}
        <ProblemSolving />

        {/* Practical Experience & Verified Real-World Work */}
        <ExperienceSection onOpenCertificate={() => setCertificateModalOpen(true)} />

        {/* Achievements & Certifications */}
        <AchievementsSection />

        {/* GitHub Explore the Code */}
        <GitHubSection />

        {/* Contact CTA */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Official Certificate Verification Modal */}
      <CertificateModal
        isOpen={certificateModalOpen}
        onClose={() => setCertificateModalOpen(false)}
      />

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="toast-notice">
          <CheckCircle2 size={16} color="var(--accent-primary)" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
