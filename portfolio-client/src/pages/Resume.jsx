import { profile } from "../data/portfolio";

function Resume() {
  return (
    <section className="section page-section">
      <div className="section-title">
        <span className="eyebrow">Resume</span>
        <h1>Experience snapshot</h1>
        <p>Download the latest resume or review the core highlights below.</p>
        <a className="btn primary" href={profile.resumeUrl} download>Download Resume</a>
      </div>
      <div className="timeline">
        {["Full Stack Developer - MERN Projects", "Frontend Engineer - React Interfaces", "Backend Developer - REST APIs"].map((item) => (
          <article className="glass-card timeline-item" key={item}>
            <span>2024 - Present</span>
            <h3>{item}</h3>
            <p>Built responsive applications, secure APIs, admin workflows, and MongoDB-backed product features.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Resume;
