import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Counter from "../components/Counter";
import SkillCard from "../components/SkillCard";
import { profile, skills, stats, typingRoles } from "../data/portfolio";

function Home() {
  return (
    <>
      <section className="hero section">
        <div className="hero-copy" data-aos="fade-right">
          <span className="eyebrow">Available for full stack roles</span>
          <h1>{profile.name}</h1>
          <h2>
            <span>{profile.profession}</span>
            <span className="typing">{typingRoles[0]}</span>
          </h2>
          <p>{profile.intro}</p>
          <div className="hero-actions">
            <a className="btn primary" href={profile.resumeUrl} download>Download Resume</a>
            <Link className="btn ghost" to="/contact">Hire Me</Link>
          </div>
        </div>
        <motion.div className="hero-photo" initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <div className="photo-placeholder">
            <span>K</span>
            <small>Professional Photo</small>
          </div>
        </motion.div>
      </section>

      <section className="section counters">
        {stats.map((stat) => <Counter key={stat.label} {...stat} />)}
      </section>

      <section className="section compact">
        <div className="section-title">
          <span className="eyebrow">Core Stack</span>
          <h2>Skills that ship products</h2>
        </div>
        <div className="skills-grid">
          {skills.slice(0, 6).map((skill) => <SkillCard key={skill.name} {...skill} />)}
        </div>
      </section>
    </>
  );
}

export default Home;
