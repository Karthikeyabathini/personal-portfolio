import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import api from "../api/axios";
import Loader from "../components/Loader";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    api.get("/projects")
      .then(({ data }) => setProjects(data.projects))
      .catch(() => toast.error("Unable to load projects"))
      .finally(() => setLoading(false));
  }, []);

  const technologies = useMemo(() => {
    const all = projects.flatMap((project) => project.technologies || []);
    return ["All", ...new Set(all)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = `${project.title} ${project.description} ${project.technologies?.join(" ")}`
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesFilter = filter === "All" || project.technologies?.includes(filter);
      return matchesSearch && matchesFilter;
    });
  }, [filter, projects, search]);

  return (
    <section className="section page-section">
      <div className="section-title">
        <span className="eyebrow">Projects</span>
        <h1>Selected work</h1>
      </div>
      <div className="toolbar">
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects" />
        <select value={filter} onChange={(event) => setFilter(event.target.value)}>
          {technologies.map((tech) => <option key={tech}>{tech}</option>)}
        </select>
      </div>
      {loading ? <Loader label="Loading projects" /> : (
        <div className="projects-grid">
          {filteredProjects.map((project) => <ProjectCard key={project._id} project={project} />)}
          {!filteredProjects.length && <p className="empty-state">No projects match your filters.</p>}
        </div>
      )}
    </section>
  );
}

export default Projects;
