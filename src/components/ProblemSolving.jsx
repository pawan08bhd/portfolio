import React from 'react';
import {
  Code2,
  ExternalLink,
  Award,
  Zap,
  CheckCircle2,
  Cpu,
  Binary,
  Layers
} from 'lucide-react';
import { PROBLEM_SOLVING_DATA } from '../data/portfolioData';

export default function ProblemSolving() {
  return (
    <section id="problem-solving" className="section">
      <div className="container">
        <div className="section-tag">
          <Binary size={13} />
          <span>Algorithms & Data Structures</span>
        </div>

        <h2 className="section-title">
          Problem Solving & Complexity Analysis
        </h2>

        <p className="section-subtitle">
          Strong algorithmic intuition developed through systematic problem-solving across core data structures and dynamic programming.
        </p>

        <div className="problem-solving-card">
          <div className="ps-header-row">
            <div>
              <h3 className="ps-headline">{PROBLEM_SOLVING_DATA.headline}</h3>
              <p className="ps-subheadline">{PROBLEM_SOLVING_DATA.subheadline}</p>
            </div>

            <div>
              <a
                href={PROBLEM_SOLVING_DATA.leetcodeProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-accent"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="ps-metrics-grid">
            {PROBLEM_SOLVING_DATA.metrics.map((m, i) => (
              <div key={i} className="ps-metric-item">
                <div className="ps-metric-val">{m.value}</div>
                <div className="ps-metric-lbl">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Focus Areas Grid */}
          <div>
            <div className="ps-topics-title">
              <Code2 size={16} color="var(--accent-primary)" />
              <span>Core Algorithmic Focus Areas:</span>
            </div>

            <div className="ps-topics-grid">
              {PROBLEM_SOLVING_DATA.topics.map((top, idx) => (
                <div key={idx} className="ps-topic-card">
                  <span className="ps-topic-name">{top.name}</span>
                  <span className="ps-topic-count">{top.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
