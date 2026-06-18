import { motion } from "framer-motion";

function SkillCard({ name, level }) {
  return (
    <article className="glass-card skill-card" data-aos="fade-up">
      <div className="skill-head">
        <strong>{name}</strong>
        <span>{level}%</span>
      </div>
      <div className="progress-track">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </div>
    </article>
  );
}

export default SkillCard;
