import SkillCard from "../components/SkillCard";
import { skills } from "../data/portfolio";

function Skills() {
  return (
    <section className="section page-section">
      <div className="section-title">
        <span className="eyebrow">Skills</span>
        <h1>Technologies I use with confidence</h1>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => <SkillCard key={skill.name} {...skill} />)}
      </div>
    </section>
  );
}

export default Skills;
