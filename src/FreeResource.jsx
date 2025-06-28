import React from 'react';
import './freeResource.css';

function FreeResource() {
  return (
    <section className="resource-section">
      <div className="resource-header">
        <h2>Free Learning Resources</h2>
        <p>Boost your skills with curated guides, cheat sheets, and mini-courses from CodeStack — absolutely free!</p>
      </div>

      <div className="resource-grid">
        <div className="resource-card">
          <img src="/images/html-cheatsheet.png" alt="HTML Cheat Sheet" />
          <h3>HTML Cheat Sheet</h3>
          <p>A quick reference for all HTML tags and structure.</p>
        </div>

        <div className="resource-card">
          <img src="/images/js-guide.png" alt="JavaScript Guide" />
          <h3>JavaScript Basics Guide</h3>
          <p>Start your JavaScript journey with clear, beginner-friendly notes.</p>
        </div>

        <div className="resource-card">
          <img src="/images/sql-resource.png" alt="SQL Resource" />
          <h3>SQL Practice Workbook</h3>
          <p>Download practice queries and real-world SQL challenges.</p>
        </div>
      </div>

      <div className="explore-btn-wrapper">
        <a href="/resources" className="btn-explore">Explore All Resources</a>
      </div>
    </section>
  );
}

export default FreeResource;
