import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

const blankProject = { title: "", description: "", image: "", technologies: "", github: "", liveDemo: "" };

function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState(blankProject);
  const [editingId, setEditingId] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  const fetchDashboard = async () => {
    const [projectRes, messageRes] = await Promise.all([api.get("/projects"), api.get("/messages")]);
    setProjects(projectRes.data.projects);
    setMessages(messageRes.data.messages);
  };

  useEffect(() => {
    fetchDashboard().catch(() => toast.error("Could not load dashboard"));
  }, []);

  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const resetForm = () => {
    setForm(blankProject);
    setEditingId("");
  };

  const submitProject = async (event) => {
    event.preventDefault();
    const payload = {
      ...form,
      technologies: form.technologies.split(",").map((tech) => tech.trim()).filter(Boolean)
    };
    try {
      if (editingId) {
        await api.put(`/projects/${editingId}`, payload);
        toast.success("Project updated");
      } else {
        await api.post("/projects", payload);
        toast.success("Project added");
      }
      resetForm();
      fetchDashboard();
    } catch (err) {
      toast.error(err.response?.data?.message || "Project save failed");
    }
  };

  const editProject = (project) => {
    setEditingId(project._id);
    setForm({ ...project, technologies: project.technologies.join(", ") });
  };

  const deleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    try {
      await api.delete(`/projects/${id}`);
      toast.success("Project deleted");
      fetchDashboard();
    } catch {
      toast.error("Delete failed");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  return (
    <section className="section admin-page">
      <div className="admin-head">
        <div>
          <span className="eyebrow">Dashboard</span>
          <h1>Manage portfolio</h1>
        </div>
        <button className="btn ghost" onClick={handleLogout}>Logout</button>
      </div>
      <div className="admin-grid">
        <form className="glass-card admin-form" onSubmit={submitProject}>
          <h2>{editingId ? "Update Project" : "Add Project"}</h2>
          <input name="title" placeholder="Title" value={form.title} onChange={updateField} required />
          <textarea name="description" placeholder="Description" value={form.description} onChange={updateField} required />
          <input name="image" placeholder="Image URL" value={form.image} onChange={updateField} required />
          <input name="technologies" placeholder="React, Node, MongoDB" value={form.technologies} onChange={updateField} required />
          <input name="github" placeholder="GitHub Link" value={form.github} onChange={updateField} required />
          <input name="liveDemo" placeholder="Live Demo Link" value={form.liveDemo} onChange={updateField} required />
          <div className="button-row">
            <button className="btn primary">{editingId ? "Save Changes" : "Add Project"}</button>
            {editingId && <button className="btn ghost" type="button" onClick={resetForm}>Cancel</button>}
          </div>
        </form>
        <div className="glass-card admin-list">
          <h2>Projects</h2>
          {projects.map((project) => (
            <div className="admin-list-item" key={project._id}>
              <span>{project.title}</span>
              <div>
                <button onClick={() => editProject(project)}>Edit</button>
                <button onClick={() => deleteProject(project._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="glass-card messages-panel">
        <h2>Messages</h2>
        {messages.map((message) => (
          <article className="message-item" key={message._id}>
            <strong>{message.subject}</strong>
            <span>{message.name} - {message.email}</span>
            <p>{message.message}</p>
          </article>
        ))}
        {!messages.length && <p className="empty-state">No messages yet.</p>}
      </div>
    </section>
  );
}

export default AdminDashboard;
