import React, { useEffect } from 'react';
import { X, Download, ExternalLink, ShieldCheck, CheckCircle2, Award, Building2 } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <Award size={22} color="var(--accent-primary)" />
            <h3 className="modal-title">Verified Departmental Internship Certificate</h3>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-content-body">
          {/* Authentic Document Card Representation */}
          <div className="certificate-document-preview">
            <div className="cert-doc-header">
              <div>
                <div className="cert-institution-title">Shri G. S. Institute of Technology & Science</div>
                <div className="cert-institution-sub">Department of Pharmacy (Media Cell) • Indore, M. P., India</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={28} color="#0f766e" />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f766e', textTransform: 'uppercase' }}>
                  Officially Verified
                </span>
              </div>
            </div>

            <div className="cert-heading-center">
              <div className="cert-main-title">Certificate of Internship</div>
              <div className="cert-main-subtitle">Practical Management & System Architecture</div>
              <p className="cert-presented-to">This certificate is presented to</p>
              <div className="cert-recipient-name">MR. PAWAN RAGHUWANSHI</div>
            </div>

            <p className="cert-body-paragraph">
              A B.Tech. student at <strong>Shri G. S. Institute of Technology & Science (SGSITS), Indore</strong>, contributed to the development of <strong>"RasayanFlow"</strong>, a web-based Chemical Store and B.Pharm. Practical Management System, from <strong>1 April 2026 to 15 July 2026</strong>.
            </p>

            <p className="cert-body-paragraph">
              He architected and developed the backend using <strong>Node.js, Express.js, and MongoDB</strong>, and led a backend team of three students. His performance and conduct were found to be excellent. We appreciate his valuable contributions and wish him success in his future academic and professional endeavors.
            </p>

            <div className="cert-sign-area">
              <div className="cert-sign-box">
                <div className="cert-sign-name">Dr. Omprakash Tanwar</div>
                <div className="cert-sign-role">
                  Former SERB-SIRe Fellow (University of Oxford)<br />
                  Assistant Professor, Department of Pharmacy<br />
                  Shri G. S. Institute of Technology and Science, Indore
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={18} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              This authentic institutional document validates Pawan's full-stack software leadership, database modeling, and real-world departmental deployment.
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            Close
          </button>

          <a
            href="/Certificate_RasayanFlow.pdf"
            download="Certificate_RasayanFlow.pdf"
            className="btn btn-primary btn-sm"
          >
            <Download size={14} />
            <span>Download Official PDF Certificate</span>
          </a>
        </div>
      </div>
    </div>
  );
}
