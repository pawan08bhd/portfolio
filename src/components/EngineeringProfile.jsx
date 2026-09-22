import React from 'react';
import {
  Code2,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
  Building,
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function EngineeringProfile() {
  const highlights = [
    {
      icon: <Building size={16} className="about-highlight-icon" />,
      text: (
        <>
          <strong>B.Tech in Electrical Engineering at SGSITS, Indore (2023–2027)</strong> with dedicated software engineering and systems focus.
        </>
      )
    },
    {
      icon: <Cpu size={16} className="about-highlight-icon" />,
      text: (
        <>
          <strong>Core CS Foundations:</strong> Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, and Computer Networks.
        </>
      )
    },
    {
      icon: <Layers size={16} className="about-highlight-icon" />,
      text: (
        <>
          <strong>Full-Stack Architecture & Real-Time Engineering:</strong> End-to-end web applications built with React, Node.js, Express, MongoDB, and Socket.IO.
        </>
      )
    },
    {
      icon: <Code2 size={16} className="about-highlight-icon" />,
      text: (
        <>
          <strong>300+ Algorithmic Problems Solved (LeetCode & GFG):</strong> Rigorous practice in asymptotic complexity analysis, DP, trees, graphs, and system design.
        </>
      )
    },
    {
      icon: <CheckCircle2 size={16} className="about-highlight-icon" />,
      text: (
        <>
          <strong>Real-World Departmental Software Deployment:</strong> Led a 4-engineer team to build ChemInventory / RasayanFlow, officially adopted by the SGSITS Pharmacy Department serving 2,000+ users.
        </>
      )
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-tag">
          <Code2 size={12} />
          <span>Engineering Profile</span>
        </div>

        <h2 className="section-title">
          Engineering Scalable, Reliable Software
        </h2>

        <p className="section-subtitle">
          Focused on backend architecture, resilient API design, database performance, and real-time distributed communication.
        </p>

        <div className="about-grid">
          {/* Main Narrative */}
          <div className="about-card">
            <div className="about-text">
              <p>
                I am a <strong>Software Engineer and Full-Stack Developer</strong> dedicated to building practical, production-ready systems that solve real operational bottlenecks. Rather than building surface-level toy apps, I focus heavily on <strong>data consistency, role-based security, modular service boundaries, and low-latency real-time synchronization</strong>.
              </p>
              <p>
                My engineering approach combines a solid foundation in <strong>computer science fundamentals (OOP, DBMS, OS, Computer Networks)</strong> with extensive hands-on experience shipping real-world software—including an inventory and workflow platform actively utilized in an academic departmental environment.
              </p>
            </div>

            <ul className="about-highlights-list">
              {highlights.map((h, index) => (
                <li key={index} className="about-highlight-item">
                  {h.icon}
                  <div>{h.text}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Metrics Panel */}
          <div className="about-stats-panel">
            <div className="stat-box">
              <div>
                <div className="stat-box-value">300+</div>
                <div className="stat-box-label">LeetCode & GFG Problems Solved</div>
              </div>
              <Code2 size={22} color="var(--accent-primary)" />
            </div>

            <div className="stat-box">
              <div>
                <div className="stat-box-value">2,000+</div>
                <div className="stat-box-label">Users Served by Department Platform</div>
              </div>
              <Building size={22} color="#a3a3a3" />
            </div>

            <div className="stat-box">
              <div>
                <div className="stat-box-value">Top 1%</div>
                <div className="stat-box-label">Rank in Flipkart GRId 8.0 Competition</div>
              </div>
              <Award size={22} color="var(--accent-amber)" />
            </div>

            <div className="stat-box">
              <div>
                <div className="stat-box-value">Elite + Top 5%</div>
                <div className="stat-box-label">NPTEL DBMS Exam (IIT Kharagpur)</div>
              </div>
              <Database size={22} color="var(--accent-primary)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
