import { aboutCards } from "../data/portfolio";

function About() {
  return (
    <section className="section page-section">
      <div className="section-title">
        <span className="eyebrow">About</span>
        <h1>Engineer with product taste and backend discipline</h1>
        <p>
          I enjoy turning ambiguous goals into usable software: polished interfaces, secure APIs, maintainable data models,
          and deployment workflows that teams can trust.
        </p>
      </div>
      <div className="about-grid">
        {aboutCards.map(({ icon: Icon, title, text }) => (
          <article className="glass-card about-card" key={title} data-aos="fade-up">
            <Icon />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
