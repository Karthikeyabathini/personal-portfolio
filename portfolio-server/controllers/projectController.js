import Project from "../models/Project.js";

const normalizeTechnologies = (technologies) => {
  if (Array.isArray(technologies)) return technologies.map((tech) => tech.trim()).filter(Boolean);
  if (typeof technologies === "string") return technologies.split(",").map((tech) => tech.trim()).filter(Boolean);
  return [];
};

const validateProject = (body) => {
  const required = ["title", "description", "image", "github", "liveDemo"];
  const missing = required.find((field) => !body[field]?.trim());
  if (missing) return `${missing} is required`;
  if (!normalizeTechnologies(body.technologies).length) return "At least one technology is required";
  return "";
};

export const getProjects = async (_req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json({ projects });
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req, res, next) => {
  try {
    const validationError = validateProject(req.body);
    if (validationError) {
      res.status(400);
      throw new Error(validationError);
    }

    const project = await Project.create({
      ...req.body,
      technologies: normalizeTechnologies(req.body.technologies)
    });
    res.status(201).json({ project });
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const validationError = validateProject(req.body);
    if (validationError) {
      res.status(400);
      throw new Error(validationError);
    }

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { ...req.body, technologies: normalizeTechnologies(req.body.technologies) },
      { new: true, runValidators: true }
    );

    if (!project) {
      res.status(404);
      throw new Error("Project not found");
    }

    res.json({ project });
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      res.status(404);
      throw new Error("Project not found");
    }
    res.json({ message: "Project deleted" });
  } catch (error) {
    next(error);
  }
};
