import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <article className="glass-card project-card" data-aos="zoom-in">
      <img src={project.image} alt={project.title} />
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.technologies?.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
          <a href={project.liveDemo} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live</a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
